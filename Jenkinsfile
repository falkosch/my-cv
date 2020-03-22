pipeline {
  agent any

  options {
    buildDiscarder(logRotator(numToKeepStr: '10'))
    preserveStashes(buildCount: 3)
    skipStagesAfterUnstable()
    timeout(time: 1, unit: 'HOURS')
  }

  triggers {
    pollSCM('H */15 * * *')
  }

  environment {
    CI = true
    HOME = "${env.WORKSPACE}"
  }

  stages {
    stage('build and deploy') {
      agent {
        docker {
          image 'schwabe/nodejs-toolchain:latest'
          label 'docker && linux'
          args '--memory=2g --memory-swap=2g'
        }
      }

      environment {
        // Will be evaluated once the stage runs on the requested
        // "docker && linux" agent, otherwise HOME may have the already
        // evaluated value from the "pipeline" level, which could be a Windows
        // path if the master runs on that OS.
        HOME = "${env.WORKSPACE}"
      }

      stages {
        stage('checkout') {
          steps {
            sh 'npm ci'
          }
        }

        stage('validation') {
          steps {
            sh 'npm run lint'
            sh 'npm test'
          }
        }

        stage('collect reports') {
          steps {
            junit 'reports/**/junit-*.xml'

            cobertura([
			  autoUpdateHealth: false,
			  autoUpdateStability: false,
              coberturaReportFile: 'coverage/**/cobertura-coverage.xml',
              conditionalCoverageTargets: '0, 0, 0',
              enableNewApi: true,
              lineCoverageTargets: '0, 0, 0',
              maxNumberOfBuilds: 0,
              methodCoverageTargets: '0, 0, 0',
              onlyStable: false,
              sourceEncoding: 'ASCII'
            ])
          }
        }

        stage('sonar quality gate') {
          steps {
            lock(resource: 'sonarcloud-my-cv') {
              withSonarQubeEnv('sonarqube') {
                withEnv(["sonar.branch.name=${env.BRANCH_NAME}"]) {
                  sh 'npm run analyze'
                }
              }

              sleep time: 20, unit: 'SECONDS'

              timeout(time: 1, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: true
              }
            }
          }
        }

        stage('build') {
          steps {
            milestone(3)
            sh 'npm run build -- --prod'
          }
        }

        stage('deploy to production') {
          when {
            allOf {
              branch 'master'
              expression {
                currentBuild.resultIsBetterOrEqualTo('SUCCESS')
              }
            }
          }

          steps {
            lock(resource: 'deploy-my-cv') {
              milestone(11)

              sshPublisher(publishers: [
                sshPublisherDesc(configName: 'Deploy to webserver', transfers: [
                  sshTransfer(
                    cleanRemote: true,
                    flatten: false,
                    makeEmptyDirs: true,
                    remoteDirectory: 'my-cv',
                    sourceFiles: 'dist/apps/my-cv/**/*',
                    removePrefix: 'dist/apps/my-cv',
                    excludes: '*.map'
                  )
                ])
              ])
            }
          }
        }
      }
    }

    stage('render and deploy PDFs') {
      // Rendering in a docker container results in bad PDF layouts. It is
      // better to render on a native host.
      agent {
        label '!docker || master'
      }

      environment {
        // Will be evaluated once the stage runs on the requested
        // "docker && linux" agent, otherwise HOME may have the already
        // evaluated value from the "pipeline" level, which could be a Windows
        // path if the master runs on that OS.
        HOME = "${env.WORKSPACE}"
      }

      when {
        allOf {
          branch 'master'
          expression {
            currentBuild.resultIsBetterOrEqualTo('SUCCESS')
          }
        }
      }

      steps {
        lock(resource: 'deploy-my-cv-pdfs') {
          milestone(23)

          dir('scripts') {
            sh 'npm ci'
            sh 'node generate-pdf.js'
          }

          sshPublisher(publishers: [
            sshPublisherDesc(configName: 'Deploy to webserver', transfers: [
              sshTransfer(
                cleanRemote: false,
                flatten: false,
                makeEmptyDirs: true,
                remoteDirectory: 'my-cv/assets',
                sourceFiles: 'dist/*.pdf',
                removePrefix: 'dist'
              )
            ])
          ]) // sshPublisher
        } // deploy-my-cv
      }
    } // render and deploy PDFs
  }

  post {
    failure {
      script {
        committerEmail = sh(returnStdout: true, script: 'git --no-pager show -s --format=\'%ae\'').trim()
      }
      mail(
        to: "${committerEmail}",
        subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
        body: "Something is wrong with ${env.BUILD_URL}"
      )
    }
  }
}
