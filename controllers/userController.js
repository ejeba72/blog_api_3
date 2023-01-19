const { User } = require("../Models/UserModel");

async function getAllLogic(req, res) {
  try {
    console.log('get users request');
    const allUsers = await User.find();
    res.send(allUsers);
  } catch (err) {
    console.log(err.messaage);
    res.send(err.message);
  }
}

module.exports = { getAllLogic }