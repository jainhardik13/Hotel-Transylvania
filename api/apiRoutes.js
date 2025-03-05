const express = require('express') // Express for routing
const path = require('path') // Path to handle file paths
const fs = require('fs') // FS module for reading and writing files
const router = express.Router() // Create an instance of Express Router

// Login route
router.post('/login', (req, res, next) => {
    const { username, password } = req.body // Destructure username and password from the request body
    // Read users data from the users.json file
    fs.readFile(path.join(__dirname, '../models/users.json'), 'utf-8', (err, data) => {
      if (err) return next(err) // Pass any error to the error handling middleware
      const users = JSON.parse(data) // Parse JSON data to get the user list
      const user = users.find(u => u.username === username && u.password === password) // Find matching user
      if (user) {
        // If user exists, redirect to the dashboard
        return res.status(302).redirect('/dashboard.html') // Redirect to dashboard.html
      } else {
        // If user doesn't exist, redirect to the register page
        return res.status(302).redirect('/api/register') // Redirect to register.html
      }
    })
  })
  // Register route
router.post('/register', (req, res, next) => {
    const { username, password } = req.body // Destructure username and password
    const newUser = { username, password } // Create a new user object
    // Read users data from the users.json file
    fs.readFile(path.join(__dirname, '../models/users.json'), 'utf-8', (err, data) => {
      if (err) return next(err) // Pass any error to the error handling middleware
      let users = []
      if (data) {
        users = JSON.parse(data) // Parse existing user data
      }
      users.push(newUser) // Add the new user to the users array
      // Write the updated users array back to the JSON file
      fs.writeFile(path.join(__dirname, '../models/users.json'), JSON.stringify(users, null, 2), (err) => {
        if (err) return next(err) // Pass any error to the error handling middleware
        res.status(302).redirect('/') // Redirect to login page after successful registration
      })
    })
  })

  // POST route for submitting feedback
router.post('/feedback', (req, res) => {
  const feedback = req.body
  const feedbackPath = path.join(__dirname, '../models/feedback.json')

  fs.readFile(feedbackPath, 'utf-8', (err, data) => {
      let feedbacks = []
      if (!err && data) {
          try {
              feedbacks = JSON.parse(data)
          } catch (parseErr) {
              console.error('Error parsing feedback.json', parseErr)
          }
      }

      // Append new feedback
      feedbacks.push({
          name: feedback.name,
          email: feedback.email,
          feedback: feedback.feedback
      })

      // Write the updated feedbacks array back to feedback.json
      fs.writeFile(feedbackPath, JSON.stringify(feedbacks, null, 2), err => {
          if (err) {
              console.error('Error saving feedback:', err)
              return res.status(500).send('Error saving feedback data')
          }
          // Redirect to thank-you page after successful feedback save
          res.redirect(302, '/thank-you.html')
      })
  })
})
  
module.exports = router // Export the router so it can be used in server.js
  