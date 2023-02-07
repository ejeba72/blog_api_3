const { Types } = require('mongoose');
const { BlogModel } = require('../Models/BlogModel')

// GET LIST LOGIC
/* 
STEPS:
1. Use the find method to retrieve the all blogs from the database with state = published.
1. Use map method to form a list of published blogs with just their title and author.
1. Send a response consisting of the list, to the client. 
*/
async function getListLogic(req, res) {
  
 try {

  const { page=1, lim=20 } = req.query;

  const blogCollection = await BlogModel
    .find({state: 'published'})
    .skip((page-1)*lim)
    .limit(lim);

  const blogList = blogCollection.map((blog) => {
    return {
      title: blog.title,
      author: blog.author
    }
  })

  console.log(blogList);
  res.status(200).send(blogList);

 } catch (err) {
  console.log(err.message);
  res.status(500).send(err.message);
 }

}

// GET BLOG LOGIC
/* 
STEPS:
1. Use the findOne method to retrieve the specified blog.
1. Use a conditional statement to ascertain if the requested blog exist in the first place. If not, return a 404 error to the client.
1. Furthermore, use another conditional statement to verify if a requested blog is published or not. If not, send a 404 response to the client.
1. If the blog exist and is published, then, send the blog to the client.
*/
async function getBlogLogic(req, res) {
  try {

    const blog = await BlogModel.findOne({_id: Types.ObjectId(req.params.id)}) 

    if(!blog) {
      return [
        console.log({"404 Error": "The blog you are requesting for does not exist or has been deleted."}), 
        res.status(404).send({"404 Error": "The blog you are requesting for does not exist or has been deleted."})
      ]
    }

    if(blog.state!=='published') {
      return [
        console.log({"404 Error": "The blog you are requesting for is unavailable."}), 
        res.status(404).send({"404 Error": "The blog you are requesting for is unavailable."})
      ]
    }

    console.log(blog);
    res.status(200).send(blog);
    
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
}

module.exports = { getListLogic, getBlogLogic }