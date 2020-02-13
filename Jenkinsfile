pipeline {
  agent {
    docker {
      image 'atlassianlabs/docker-node-jdk-chrome-firefox:2020-02-03'
      label 'docker && linux'
      args '--memory=2g --memory-swap=2g'
    }
  }

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
    stage('checkout') {
      steps {
        sh 'npm ci'
      }
    }

    stage('validation') {
      steps {
        sh 'npm run lint'
        sh 'npm run test'
      }
    }

    stage('sonar quality gate') {
      steps {
        lock(resource: 'sonarcloud-my-cv') {
          withSonarQubeEnv('sonarqube') {
            withEnv(["sonar.branch.name=${env.BRANCH_NAME}"]) {
              sh 'npm run analyse'
            }
          }

          sleep time: 20, unit: 'SECONDS'

          timeout(time: 1, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
          }
        }
      }
    }

    stage('deploy') {
      when {
        expression {
          currentBuild.resultIsBetterOrEqualTo('SUCCESS')
        }
      }

      stages {
        stage('Deploy to production') {
          when {
            branch 'master'
          }

          steps {
            milestone(3)
            sh 'npm run build -- --prod'

            lock(resource: 'deploy-my-cv') {
              milestone(11)

              sshPublisher(
                publishers: [
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
                ]
              )

              sh 'cd tools && node generate-pdf.js'

              sshPublisher(
                publishers: [
                  sshPublisherDesc(configName: 'Deploy to webserver', transfers: [
                    sshTransfer(
                      cleanRemote: false,
                      flatten: false,
                      makeEmptyDirs: true,
                      remoteDirectory: 'my-cv/assets',
                      sourceFiles: 'dist/apps/my-cv/assets/*.pdf',
                      removePrefix: 'dist/apps/my-cv/assets'
                    )
                  ])
                ]
              ) // sshPublisher
            } // deploy-my-cv-personal
          }
        } // Deploy to production
      }
    } // deploy
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
