const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
  title: String
})

const Blog = model('Blog', blogSchema);

module.exports = { Blog }