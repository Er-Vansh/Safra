// Import multer, a middleware for handling multipart/form-data (primarily used for file uploads)
const multer = require('multer');

// Import multer-firebase-storage to use Firebase as the destination for uploaded files
const firebaseStorage = require('multer-firebase-storage');

// Import the Firebase Admin SDK instance configured in a separate file
const firebase = require('./firebase.config');

// Import the Firebase service account credentials (ensure this is in .gitignore for security)
const serviceAccount = require('../drive-76e9a-firebase-adminsdk-fbsvc-d0dee13217.json')


// Set up the Firebase storage configuration for multer
const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName : '', // TODO: Insert your Firebase Storage bucket name (e.g., 'your-project-id.appspot.com')

    unique: true
})


// Create a multer instance and pass the Firebase storage configuration to it
const upload = multer({
    storage : storage,
})

module.exports = upload;