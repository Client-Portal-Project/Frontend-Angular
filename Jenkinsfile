pipeline {
    agent any

    options {
        buildDiscarder(logRotator(daysToKeepStr: '90', numToKeepStr: '1'))
        disableConcurrentBuilds()
    }

    tools { nodejs "node"}

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                discordSend description: "${env.JOB_NAME} :construction: *Updated Dependencies*", result: currentBuild.currentResult, webhookURL: env.WEBHO_JA
            }
        }

        stage('Compile Angular Files'){
            steps {
                sh 'ng build --aot'
                discordSend description: "${env.JOB_NAME} :construction_site: *Built Production Model*", result: currentBuild.currentResult, webhookURL: env.WEBHO_JA
            }
        }
    }
} 