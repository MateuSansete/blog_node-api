// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blogController');
const blogController = new BlogController()


// Definir rota de loginblogController
router.get('/posts', blogController.listPosts.bind(blogController));
router.post('/posts', blogController.createPost.bind(blogController));
router.put('/posts/:id', blogController.updatePost.bind(blogController));
router.delete('/posts/:id', blogController.deletePost.bind(blogController));

module.exports = router;
