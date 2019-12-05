pipeline {
  agent any
  options {
    disableConcurrentBuilds()
    skipStagesAfterUnstable()
    timeout(time: 1, unit: 'HOURS')
  }
  triggers {
    pollSCM('H */15 * * *')
  }
  stages {
    stage('checkout') {
      steps {
        sh 'npm install'
      }
    }
    stage('validation') {
      steps {
        sh 'npm run lint'
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
            // Build and deploy current web version
            sh 'npm run build -- --prod'
            sshPublisher(
              publishers: [
                sshPublisherDesc(configName: 'Deploy to webserver', transfers: [
                  sshTransfer(
                    cleanRemote: true,
                    flatten: false,
                    makeEmptyDirs: true,
                    remoteDirectory: 'cv',
                    sourceFiles: 'dist/apps/my-cv/**/*',
                    removePrefix: 'dist/apps/my-cv',
                    excludes: '*.map'
                  )
                ])
              ]
            )
            // Generate pdf print version and deploy to prod
            sh 'cd tools && node generate-pdf.js'
            sshPublisher(
              publishers: [
                sshPublisherDesc(configName: 'Deploy to webserver', transfers: [
                  sshTransfer(
                    cleanRemote: false,
                    flatten: false,
                    makeEmptyDirs: true,
                    remoteDirectory: 'cv/assets',
                    sourceFiles: 'dist/apps/my-cv/assets/*.pdf',
                    removePrefix: 'dist/apps/my-cv/assets'
                  )
                ])
              ]
            )
          }
        }
      }
    }
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
