const { Types } = require("mongoose");
const { BlogModel } = require("../Models/BlogModel");

// POST BLOG LOGIC
/* 
STEPS:
1. use the mongoose Model to create a mongodb document with the req.body as the argument for the Model. (Note that, the mongoose Model is a js class, while the mongodb document is a js object.)
2. save the document to mongodb. (Note that, the document would be saved in the mongodb collection that is specified as a params in the mongodb URI that is used to connect your application to Mongodb database.)
*/
async function postBlogLogic(req, res) {
  try {
    const blogDocument = new BlogModel(req.body);
    await blogDocument.save();

    const resMessage = {
      status: 'Your blog has been successfully saved as draft.',
      draft: blogDocument
    }

    console.log(resMessage);
    res.status(201).send(resMessage);
    
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
}

// PUT BLOG LOGIC
/* 
STEPS:
1. retrieve the id of the specified document, from the request's url params.
1. Use the id (or any other unique means of identification, e.g. blog title)specified in the put request's url params to find and retrieve the document from the database.
1. use the data in the req.body to change or add to the document.
1. save the modified document back to the database. (Note that, since it is a put request, the modified document will be used to entirely replace the old document in the database.)
1. Send a response to the client, to inform client of your success (or err).
 */
async function putBlogLogic(req, res) {

  try {
    const blogDocument = await BlogModel.findOne({_id: req.params.id});

    if(!blogDocument) {
      console.log('No such blog exist');
      res.status(404).send('No such blog exist');
    }

    blogDocument.title = req.body.title || blogDocument.title;
    blogDocument.description = req.body.description || blogDocument.description;
    blogDocument.tags = req.body.tags || blogDocument.tags;
    blogDocument.author = req.body.author || blogDocument.author;
    blogDocument.state = req.body.state || blogDocument.state;
    // blogDocument.readingTime = estimatedReadingTime(req.body);

    await blogDocument.save();

    console.log(blogDocument);
    res.status(200).send(blogDocument);

  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
}

// DELETE BLOG LOGIC
/* 
STEPS:
1. retrieve the blog's id from the url params
1. employ the mongoose "deleteOne" method to delete the specified blog, passing the id as an argument to the "deleteOne" method.
1. send a response to the client, indicating that the desired blog has been successfully deleted.
*/
async function deleteBlogLogic(req, res) {}



module.exports = { postBlogLogic, putBlogLogic }



