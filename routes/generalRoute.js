const { Router } = require('express');
const { getListLogic, getBlogLogic } = require('../controllers/generalController');

const router = Router();

router.route('/').get(getListLogic);
router.route('/:id').get(getBlogLogic);

module.exports = { generalRoute: router}