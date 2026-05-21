pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Security Scan') {
            steps {
                sh 'npm audit --audit-level=high'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t studentnetsafe-api .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 --name studentnetsafe-container studentnetsafe-api || true'
            }
        }

        stage('Release') {
            steps {
                echo 'Application release completed successfully'
                sh 'docker images'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring deployed containers and services'
                sh 'docker ps'
            }
        }

    }
}
