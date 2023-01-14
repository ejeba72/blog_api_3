const { Router } = require("express");
const { getHealthLogic } = require("../controllers/healthController");

const route = Router();

route.get('/', getHealthLogic)

module.exports = { healthRoute: route }