const { Router } = require('express');
const { getListLogic } = require('../controllers/generalController');

const router = Router();

router.route('/').get(getListLogic);

module.exports = { generalRoute: router}