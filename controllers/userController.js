const { User } = require("../Models/UserModel");

async function getAllLogic(req, res) {
  console.log('get users request');
  const allUsers = await User.find();
  res.send(allUsers);
}

// module.exports = { getAllLogic }