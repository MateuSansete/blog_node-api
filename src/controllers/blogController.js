const BlogModel = require('../models/blogModel');

class BlogController {
  async listPosts(req, res) {
    try {
      const posts = await BlogModel.findPosts();
      if (posts) {
        res.status(200).send(posts);
      } else {
        res.status(401).send({ message: 'posts_not_found'});
      }
    } catch (err) {
      console.log(err);
    }
  }

  async createPost(req, res) {
    try {
      const body = req.body;
  
      await BlogModel.createPost(body);
      const posts = await BlogModel.findPosts();
      if (posts) {
        res.status(200).send(posts);
      } else {
        res.status(401).send({ message: 'posts_not_found'});
      }
    } catch {
      console.log(err);
    }
  }
}

module.exports = BlogController;
