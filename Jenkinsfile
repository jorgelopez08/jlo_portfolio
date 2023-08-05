pipeline {
  agent any
  stages {
    stage('ssh connection') {
      steps {
        sshagent()
      }
    }

    stage('Portfolio') {
      steps {
        sh 'cd jlo_portfolio/'
      }
    }

    stage('') {
      steps {
        git(url: 'https://github.com/jorgelopez08/jlo_portfolio', branch: 'master')
      }
    }

  }
}