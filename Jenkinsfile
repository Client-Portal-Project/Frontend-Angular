def CURR = 'Pre-Pipeline'
def CMD = 'No command given'
def ERR = 'NONE'
def url = s3PresignURL(bucket: 'angular-front-px', key:'d47e875c-af42-4287-9499-efcd2d6056e4')
pipeline {
    agent any

    options {
        buildDiscarder(logRotator(daysToKeepStr: '90', numToKeepStr: '1'))
        disableConcurrentBuilds()
    }

    tools { 
        nodejs "node"
    }
  
    environment {
        DOCKERHUB_CREDENTIALS = credentials('clientportalx-dockerhub')
    }
  
    stages {


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
                
                sh('ls')
            }
        }

        stage('Compile Angular Files'){
            steps {
                script {
                    CURR = "Build"
                    CMD = 'ng build --aot > result'
                    if (sh(script: CMD, returnStatus: true) != 0) {
                        ERR = readFile('result').trim()
                        CMD = CMD.split(' > ')[0].trim()
                        error('Failure')
                    }
                }
            }
        }
        
       
        stage('Upload to S3 Bucket'){
            steps {
                sh('ls')
                sh('ls src/')
                s3Upload (consoleLogLevel: 'INFO', dontSetBuildResultOnFailure: false, dontWaitForConcurrentBuildCompletion: false, entries: [[bucket: 'angular-front-px', excludedFile: '', flatten: false, gzipFiles: false, keepForever: false, managedArtifacts: false, noUploadOnFailure: false, selectedRegion: 'us-iso-east-1', showDirectlyInBrowser: false, sourceFile: '**/dist/project-x/*', storageClass: 'STANDARD', uploadFromSlave: false, useServerSideEncryption: false]], pluginFailureResultConstraint: 'FAILURE', profileName: 'ProjectX-S3', userMetadata: [])

            }
        }

    }
    post {
        always {
            script {
                CMD = CMD.split(' > ')[0].trim()
            }
            sh 'docker logout'
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
