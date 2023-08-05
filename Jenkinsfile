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

    stage('clone') {
      steps {
        git(url: 'git@github.com:jorgelopez08/jlo_portfolio.git', branch: 'master')
      }
    }

    stage('docker') {
      steps {
        sh 'docker compose up --build -d'
      }
    }

  }
}