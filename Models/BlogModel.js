const { Schema, model } = require('mongoose');

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "This titled has already been used"]
    },
    description: {
      type: String
    },
    tags: {
      type: Array,
      index: true
    },
    author: {
      type: String,
      index: true
    },
    state: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true
    },
    readCount: {
      type: Number,
      default: 0
    },
    readingTime: {
      type: Number
    },
    body: {
      type: String,
      required: true
    },
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  { timestamps: true }
)

const BlogModel = model('Blog', blogSchema);

module.exports = { BlogModel }