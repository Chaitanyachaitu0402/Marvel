// models/user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  // Add more user fields as needed
});

module.exports = mongoose.model('User', userSchema);
