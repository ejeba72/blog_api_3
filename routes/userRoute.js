const { Router } = require("express");
const { getAllLogic } = require("../controllers/userController");

const route = Router();

route.get('/', getAllLogic);

module.exports = { userRoute: route }