// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Chaitanya_0402:Chaitanya123@marvel-data.8zyhxsh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

module.exports = mongoose.connection;
