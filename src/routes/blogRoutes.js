// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blogController');
const blogController = new BlogController()


// Definir rota de loginblogController
router.get('/posts', blogController.listPosts.bind(blogController));
router.post('/posts', blogController.createPost.bind(blogController));

module.exports = router;
