const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

//create a blog router
router.post('/', blogController.createBlog);
//getAll Router router
router.get('/', blogController.getAllBlogs);
//get Ba blog byID router
router.get('/:id', blogController.getBlogById);
//update a blog router
router.put('/:id', blogController.updateBlog);
//delete blog router
router.delete('/:id', blogController.deleteBlog);

module.exports = router;