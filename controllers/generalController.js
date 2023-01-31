const { Blog, BlogModel } = require('../Models/BlogModel')

async function getListLogic(req, res) {
  
  const blogList = await BlogModel.find({state: 'published'});

  console.log(blogList);
  res.status(200).send(blogList);

}

module.exports = { getListLogic }


































// // GET BLOG BY ID LOGIC
// /* 
// 1. retrieve the id from the url params
// 1. retrieve the blog document from the database (ie MongoDB), by passing the id as an argument in the find method. Note, the argument will take the form of an object, with key-value pair.
// 1. send the retrieved blog document to the client.
// */
// async function getBlogByIdLogic(req, res) {
//   try {
//     const blogDocument = await BlogModel.find({_id: Types.ObjectId(req.params.id)});

//     if(!blogDocument) {
//       console.log('No such blog exist');
//       res.status(404).send('No such blog exist');
//     }

//     console.log(blogDocument);
//     res.status(200).send(blogDocument);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).send(err.message);
//   }
// }