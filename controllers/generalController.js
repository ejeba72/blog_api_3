const { Blog } = require('../Models/BlogModel')

async function getListLogic(req, res) {
  console.log('get list request')
  const blogList =  await Blog.find()
  res.send(blogList)
}

module.exports = { getListLogic }