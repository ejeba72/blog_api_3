const { Router } = require("express");
const { postBlogLogic, putBlogLogic, getBlogByIdLogic } = require("../controllers/editController");

const router = Router();

router.route('/').post(postBlogLogic);
router.route('/:id').put(putBlogLogic);

module.exports = { editRoute: router}