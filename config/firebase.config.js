const Firebase = require('firebase-admin')

const serviceAccount = require('../drive-76e9a-firebase-adminsdk-fbsvc-d0dee13217.json')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket : '' // TODO: Insert your Firebase Storage bucket name (e.g., 'your-project-id.appspot.com')
})

module.exports = Firebase;