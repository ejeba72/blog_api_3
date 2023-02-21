const { Router } = require("express");
const { verifyToken } = require('../middleware/authMiddleware');
const { postBlogLogic, putBlogLogic, deleteBlogLogic, getListLogic, } = require("../controllers/editController");

const router = Router();

router.use('/', verifyToken);

router.route('/')
  .post(postBlogLogic)
  .get(getListLogic);

router.route('/:id')
  .put(putBlogLogic)
  .delete(deleteBlogLogic);

module.exports = { editRoute: router}