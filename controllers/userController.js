const { config } = require('dotenv');
const { sign } = require('jsonwebtoken');
const { UserModel } = require('../Models/UserModel');

// DOTENV CONFIG
config();

const expiration = 60 * 60;
const JWT_SECRET = process.env.JWT_SECRET;

// JSON WEB TOKEN
function createToken(id) {
  // console.log('JWT SECRET = ', JWT_SECRET, 'id = ', id)
  return sign({ id }, JWT_SECRET, {
    expiresIn: expiration,
  });
}

// SIGN UP LOGIC
async function signupLogic(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;

    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password,
    });

    const savedUser = await newUser.save();

    const token = createToken(savedUser._id);

    console.log(savedUser);
    res.status(201).send({
      token,
      message: `Hurray! Your sign up is successful!`,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send(`Email has already been taken`);
    }
    console.log(err.message);
    res.status(500).send(err.message);
  }
}

// LOGIN LOGIC
async function loginLogic(req, res) {
  try {
    const { email, password } = req.body;

    console.log('req.body is: ', req.body);
    
    const user = await UserModel.login(email, password);

    // console.log('user is: ', user)
    console.log('user._id = ', user._id);

    const token = createToken(user._id);

    res.status(200).send({
      message: `Hello ${user.firstName}! You've been logged in successfully.`,
      token,
    });
  } catch (err) {
    console.log('ATTENTION: ', err);
    res.status(400).send(err.message);
  }
}

// LOGOUT LOGIC
async function logoutLogic(req, res) {
  try {
    res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).send(`You've been logout successfully`);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = { signupLogic, loginLogic, logoutLogic };