const { Types } = require("mongoose");
const { BlogModel } = require("../Models/BlogModel");

// POST BLOG LOGIC
/* 
STEPS:
1. use the mongoose Model to create a mongodb document with the req.body as the argument for the Model. (Note that, the mongoose Model is a js class, while the mongodb document is a js object.)
1. save the document to mongodb. (Note that, the document would be saved in the mongodb collection that is specified as a params in the mongodb URI that is used to connect your application to Mongodb database.)
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
async function deleteBlogLogic(req, res) {
  try {

    const blogDocument = await BlogModel.findOne({_id: Types.ObjectId(req.params.id)});

    if (!blogDocument) {
      console.log('That blog does not exist or may have already been deleted');
      res.status(404).send('That blog does not exist or may have already been deleted');
      return;
    }
    
    await BlogModel.deleteOne({_id: Types.ObjectId(req.params.id)});

    const blogCollection = await BlogModel.find();

    const resMessage = {
      message: 'Blog deleted successfully',
      availableBlogs: `You have ${blogCollection.length} blogs posts left.`
    }

    console.log(resMessage);
    res.status(200).send(resMessage);

  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
}

// GET LIST LOGIC
/* 
STEPS:
1. Determine the fields that will make up the list for each blog. In this case, it is reasonable that it should be the title, author as well as state, since it would be filterable by state.
1. Retrieve all the blogs from the blog collection, in the database,
1. Use the map method to form a blogList consisting of title and author for each blog on the list.
1. send a response of the blogList to the client.
*/
async function getListLogic(req, res) {
  try {

    const { page, lim, state } = req.query;

    /* 
    PLEASE NOTE: page is the page you wish to see, lim is th number of items per page.
    Furthermore, I perceive that the use of the limit and skip methods for pagination is more or less improvisation on the part of the programmer. This is exciting to me!
    */
    
    const blogs = await BlogModel.find().skip((page - 1) * lim).limit(lim);

    const blogList = blogs.map(({ title, author, state }) => {
      return { title, author, state }
    })

    if(state==='published') {
      const publishedBlog = blogList.filter((blog) => {
        return blog.state === 'published';
      })
      return [ console.log(publishedBlog), res.status(200).send(publishedBlog) ]
    }

    if(state==='draft') {
      const draft = blogList.filter((blog) => {
        return blog.state === 'draft';
      })
      return [ console.log(draft), res.status(200).send(draft) ]
    }

    const resMessage = {
      message: `Get request is successful`,
      query: req.query,
      blogList
    }

    console.log(resMessage);
    res.status(200).send(resMessage);

  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
}

module.exports = { postBlogLogic, putBlogLogic, deleteBlogLogic, getListLogic }



