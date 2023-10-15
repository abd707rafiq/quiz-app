const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userType: {
        type: String,
        
        required: true,
      },
      
      userName: {
        type: String,
        required: true,
        unique: true,
      },
      mail: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
});

module.exports = mongoose.model("User", userSchema);
