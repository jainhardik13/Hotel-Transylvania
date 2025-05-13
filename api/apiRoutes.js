const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Feedback = require('../models/Feedback');

// Login route
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      return res.status(302).redirect('/dashboard');
    } else {
      return res.status(302).redirect('/api/register');
    }
  } catch (err) {
    return next(err);
  }
});

// Register route
router.post('/register', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).send('User already exists');
    }
    const newUser = new User({ username, password });
    await newUser.save();
    return res.status(302).redirect('/');
  } catch (err) {
    return next(err);
  }
});

// Feedback route
router.post('/feedback', async (req, res, next) => {
  const { name, email, feedback } = req.body;
  try {
    const newFeedback = new Feedback({ name, email, feedback });
    await newFeedback.save();
    return res.status(302).redirect('/thank-you');
  } catch (err) {
    return next(err);
  }
});

// Get All Feedbacks
router.get('/feedbacks', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 }); // latest first
        res.status(200).json(feedbacks);
    } catch (err) {
        console.error('Fetching Feedbacks Error:', err);
        res.status(500).json({ message: 'Server error while fetching feedbacks' });
    }
});


module.exports = router;
