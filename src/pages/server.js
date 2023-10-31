// server.js
const express = require('express');
const app = express();
const mongoose = require('./db'); // Import the MongoDB connection
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user'); // Import the User model

// Middleware for parsing JSON requests
app.use(express.json());

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Define the Local Strategy for Passport
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false, { message: 'Incorrect email.' });
    if (!user.validPassword(password)) return done(null, false, { message: 'Incorrect password.' });
    return done(null, user);
  });
}));

// Define API routes for registration and login
app.post('/api/register', (req, res) => {
  // Implement user registration logic here
});

app.post('/api/login', passport.authenticate('local'), (req, res) => {
  // Successful login response
  res.json(req.user);
});

app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
