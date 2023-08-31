const express = require('express')
/* The require() function is used to import the package which is passed as the param. Here the dotenv is used.

The dotenv is a module that loads environment variables from a .env file that you create and adds them to the process.env object which is then made available to the application.

The config() is a method which is provided by the dotenv module to config the env files. */
const dotenv = require('dotenv').config()  
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))