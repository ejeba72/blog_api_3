const { Schema, model } = require("mongoose");


const userSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: true,
    
  }
})

const User = model('User', userSchema);

module.exports = { User }