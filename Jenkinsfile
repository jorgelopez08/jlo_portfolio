pipeline {
  agent any
  stages {
    stage('Portfolio') {
      steps {
        sh 'cd /Developer/jlo_portfolio/'
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