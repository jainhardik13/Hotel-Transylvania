const express = require('express')
const path = require('path')
const PORT = 8081
//Import Middleware
const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
// Middleware to handle JSON and URL-encoded data in POST requests
app.use(express.json()) // To parse JSON bodies
app.use(express.urlencoded({ extended: true })) // To parse URL-encoded data
// Use logger middleware for all incoming requests
app.use(logger) // Log each request
// Serve static files (HTML, CSS, JS) from the /public directory
app.use(express.static(path.join(__dirname, 'public')))

const apiRoutes = require('./api/apiRoutes') // Import the API routes for login, register, feedback functionality
app.use('/api', apiRoutes) // Mount the API routes on /api path

// Serve login.html at the root URL
app.get('/api/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html')) // Serve the login page at /login URL
})

// Serve register.html when user needs to register
app.get('/api/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html')) // Serve the register HTML file
})

// Serve feedback.html when user needs to submit feedback
app.get('/api/feedback', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'feedback.html')) // Serve the register HTML file
})


// Making a loop to render all the static files using ForEach loop
const staticFiles = [
    'dashboard.html', 'hotel3.html', 'hotel7.html',
    'hotel4.html', 'hotel8.html','hotel1.html', 'hotel5.html', 
    'hotel9.html','hotel2.html', 'hotel6.html', 'thank-you.html'
]
staticFiles.forEach(file => {
    app.get(`/${file}`, (req, res) => {
        res.sendFile(path.join(__dirname, 'public', file))
    })
})
// Making a loop to render all the photos using ForEach loop
const imageFiles = [
    'h7d1.jpeg', 'h9m1.jpeg', 'hotel2ex2.jpg', 'hotel5gar.jpg',
    'h7d2.jpeg', 'h9m2.jpeg', 'hotel2int1.jpg', 'hotel5garii.jpg',
    'h7e1.jpeg', 'h9p1.jpeg', 'hotel2int2.jpg', 'hotel5res.jpg',
    'h7e2.jpg', 'h9p2.jpeg', 'hotel2pool1.jpg', 'hotel5resii.jpg',
    'h7i1.jpg', 'h9v1.jpeg', 'hotel2pool2.jpg', 'hotel6.png',
    'h7i2.jpeg', 'h9v2.jpeg', 'hotel2room1.jpg', 'hotel6in.jpg',
    'h7l1.jpeg', 'hotel1.png', 'hotel2room2.jpg', 'hotel6inii.jpg',
    'h7l2.jpeg', 'hotel1benefit1.jpg', 'hotel2view1.jpg', 'hotel7.png',
    'h7p1.jpeg', 'hotel1benefit2.jpg', 'hotel2view2.jpg', 'hotel8.png',
    'h7p2.jpeg', 'hotel1ex1.jpg', 'hotel3.png', 'hotel9.png',
    'h7v1.jpeg', 'hotel1ex2.jpg', 'hotel3dinning1.jpg', 'hotelin4.jpg',
    'h7v2.jpeg', 'hotel1meeting1.jpg', 'hotel3dinning2.jpg', 'hotelin4ii.jpg',
    'h8i1.jpg', 'hotel1meeting2.jpg', 'hotel3ex1.jpg', 'hotelin5.jpg',
    'h8i2.png', 'hotel1pool1.jpg', 'hotel3ex2.jpg', 'hotelin5ii.png',
    'h8p1.jpg', 'hotel1pool2.jpg', 'hotel3int1.jpg', 'hotelpool4.jpg',
    'h8p2.jpeg', 'hotel1room1.jpg', 'hotel3int2.jpg', 'hotelpoolii4.jpg',
    'h8r1.png', 'hotel1room2.jpg', 'hotel3room1.jpg', 'hotelres4.jpg',
    'h8r2.jpg', 'hotel1view1.jpg', 'hotel3room2.jpg', 'hotelresii4.jpg',
    'h9e1.jpeg', 'hotel1view2.jpg', 'hotel3service1.jpg', 'seaview.jpg',
    'h9e2.jpg', 'hotel1view3.jpg', 'hotel3service2.jpg', 'seaviewii.jpg',
    'h9extra1.jpeg', 'hotel2.png', 'hotel3view.jpg', 'tajdin.jpg',
    'h9extra2.jpeg', 'hotel2dinning1.jpg', 'hotel3view1.jpg', 'tajdinii.jpg',
    'h9l1.jpeg', 'hotel2dinning2.jpg', 'hotel4.jpg',
    'h9l2.jpeg', 'hotel2ex1.jpg', 'hotel5.png', 'hotel1.png'
]

imageFiles.forEach(file => {
    app.get(`/${file}`, (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'images', file))
    })
})
// Test route to trigger an error
app.get('/error-test', (req, res, next) => {
    // Create an error and pass it to the next middleware
    next(new Error('This is a test error'))
})

// Catch-all middleware for any routes that don't match (404 Not Found)
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.status = 404;
    next(error);
})

// Use error handler middleware for catching and handling errors
app.use(errorHandler) // Handle errors globally
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})