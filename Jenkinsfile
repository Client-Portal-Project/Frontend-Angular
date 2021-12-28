def CURR = 'Pre-Pipeline'
def CMD = 'No command given'
def ERR = 'NONE'

pipeline {
    agent any

    options {
        buildDiscarder(logRotator(daysToKeepStr: '90', numToKeepStr: '1'))
        disableConcurrentBuilds()
    }

    tools { 
        nodejs "node"
    }

    stages {
        stage('Static Analysis') {
            environment {
                SCAN = tool 'sonarcloud'
                ORG = "client-portal-project"
                NAME = "Frontend-Angular"
            }
            steps {
                script {
                    CURR = 'Static Analysis'
                    CMD = '''$SCAN/bin/sonar-scanner -Dsonar.organization=$ORG \
                            -Dsonar.projectKey=$NAME -Dsonar.sources=./src/ \
                            -Dsonar.sourceEncoding=UTF-8'''
                }
                withSonarQubeEnv('sonarserve') {
                    sh(script: CMD)
                }
                timeout(time: 5, unit: 'MINUTES') {
                    script{
                        ERR = waitForQualityGate()
                        if (ERR.status != 'OK') {
                            writeFile(file: 'result', text: "${ERR}")
                            error('Quality Gate Failed')
                        }
                    }
                }
                discordSend description: ":unlock: Passed Static Analysis of ${env.JOB_NAME}", result: currentBuild.currentResult, webhookURL: env.WEBHO_JA
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    CURR = "Install Dependencies"
                    CMD = 'npm install > result'
                    if (sh(script: CMD, returnStatus: true) != 0) {
                        ERR = readFile('result').trim()
                        CMD = CMD.split(' > ')[0].trim()
                        error('Failure')
                    }
                }
                discordSend description: ":construction: Updated Dependencies for ${env.JOB_NAME}", result: currentBuild.currentResult, webhookURL: env.WEBHO_JA
            }
        }

        stage('Compile Angular Files'){
            steps {
                discordSend description: ":warning: **Entering Angular Build Stage. Please Standby...**", unstable: true, webhookURL: env.WEBHO_JA
                script {
                    CURR = "Build"
                    CMD = 'ng build --aot > result'
                    if (sh(script: CMD, returnStatus: true) != 0) {
                        ERR = readFile('result').trim()
                        CMD = CMD.split(' > ')[0].trim()
                        error('Failure')
                    }
                }
                discordSend description: ":construction_site: Built Production Model for ${env.JOB_NAME}", result: currentBuild.currentResult, webhookURL: env.WEBHO_JA
            }
        }
    }
    post {
        always {
            script {
                CMD = CMD.split(' > ')[0].trim()
            }
            
        }
        failure {
            discordSend title: "**:boom: ${env.JOB_NAME} Failure in ${CURR} Stage**",
                        description: "*${CMD}*\n\n${ERR}",
                        footer: "Follow title URL for full console output",
                        link: env.BUILD_URL + "console", image: 'https://jenkins.io/images/logos/fire/256.png',
                        result: currentBuild.currentResult, webhookURL: WEBHO_JA
        }
        success {
            cleanWs()
        }
    }
} 