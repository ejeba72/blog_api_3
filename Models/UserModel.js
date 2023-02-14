const { Schema, model } = require("mongoose");
const { genSalt, hash, compare } = require('bcrypt');

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

// USING BCRYPT TO HASH NEW USER PASSWORD BEFORE SAVING USER DATA TO DB.
userSchema.pre('save', async function (next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
});

// COMPARING "LOGIN PASSWORD" WITH "DATABASE PASSWORD"
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw Error(`Invalid email and password.`);
  }

  const comparePwd = await compare(password, user.password);

  if (!comparePwd) {
    throw Error(`Invalid email and password.`);
  }

  return user;
}

const UserModel = model('User', userSchema)

module.exports = { UserModel }