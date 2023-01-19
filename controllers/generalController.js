const { Blog } = require('../Models/BlogModel')

async function getListLogic(req, res) {
  try {
    console.log('get list request');
    const blogList =  await Blog.find();
    res.send(blogList);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
}

module.exports = { getListLogic }