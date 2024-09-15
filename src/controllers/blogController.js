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
    } catch(err) {
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
    } catch(err) {
      console.log(err);
    }
  }

  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      // Encontrar o item no "banco de dados" e atualizar
      let post = await BlogModel.findByIdAndUpdate(id, updatedData);
      
      if (!post) {
        return res.status(404).json({ error: 'Item não encontrado' });
      }

      res.json(post);
    } catch(err) {
      console.log(err);
      res.status(400).json({ error: err })
    }
  }

  async deletePost(req, res) {
    try {
      const { id } = req.params;

      // Encontrar o item no "banco de dados" e atualizar
      let post = await BlogModel.findByIdAndDelte(id);
      
      if (!post) {
        return res.status(404).json({ error: 'Item não encontrado' });
      }

      res.json(post);
    } catch(err) {
      console.log(err);
      res.status(400).json({ error: err })
    }
  }
}

module.exports = BlogController;
