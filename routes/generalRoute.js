const { Router } = require('express');
const { getListLogic } = require('../controllers/generalController');

const route = Router();

route.get('/', getListLogic)

module.exports = { generalRoute: route}