// Importing required modules
const express = require('express')// Express framework
const userRouter = require('./routes/user.routes')// User-related routes
const dotenv = require('dotenv')// For loading environment variables

// Load environment variables from .env file
dotenv.config()



const connectToDB = require('./config/db')
connectToDB();

const cookieParser = require('cookie-parser')// Middleware to parse cookies

const app = express()// Create an Express app instance

const indexRouter = require('./routes/index.routes')

// Set EJS as the templating engine
app.set('view engine', 'ejs')

// Middleware to parse cookies from the request
app.use(cookieParser())

// Middleware to parse incoming JSON requests
app.use(express.json())

// Middleware to parse URL-encoded data (e.g., form submissions)
app.use(express.urlencoded({extended:true}))

// Use index routes for the root path
app.use('/', indexRouter)

// Use user routes under the /user path
app.use('/user', userRouter)



app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})
