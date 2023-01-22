const { Schema, model } = require("mongoose");

function validateEmail(email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

const userSchema = new Schema(
  {
    firstName: {
    type: String,
    required: [true, "Hey! Your first name is required"],
    maxLength: [50, "Sorry, we can't afford more than 50 characters"],
    trim: true
    },
    lastName: {
    type: String,
    required: [true, "Hey, your last name is required"],
    maxLength: [50, "Sorry, we can only afford 50 characters at most"],
    trim: true
    },
    email: {
    type: String,
    required: [true, "Hey! Your email is required"],
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validateEmail, "Please enter a valid email"]
    },
    password: {
    type: String,
    required: true,
    minLength: [8, "Your password is weak. Make it, at least 8 characters long, to make it stronger"],
    maxLength: [100, "Impressive! Alas, we can only afford a maximum of 100 characters for your password"]
    }
  },
  { timestamps: true }
)

const User = model('User', userSchema)

module.exports = { User }