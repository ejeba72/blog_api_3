const { Router } = require("express");
const { postBlogLogic, putBlogLogic, getBlogByIdLogic, deleteBlogLogic } = require("../controllers/editController");

const router = Router();

router.route('/').post(postBlogLogic);
router.route('/:id').put(putBlogLogic).delete(deleteBlogLogic);

module.exports = { editRoute: router}