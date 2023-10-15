const mongoose = require('mongoose');
/// uri = "" add your databas 
const connectDB = () => {
  
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
      
    })
    .catch(error => {
      console.error('Error connecting to MongoDB:', error);
    });
  };
  module.exports = connectDB;