const { Router } = require("express");
const { getHealthLogic } = require("../controllers/healthController");

const router = Router();

router.route('/').get(getHealthLogic)

module.exports = { healthRoute: router }