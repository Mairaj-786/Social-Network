const express = require('express');
const { createPost, getAllPosts, myPosts } = require('../controllers/post');
const router = express.Router();

const requiredLogin = require('../middleware/requiredLogin');

router.post('/createpost', requiredLogin, createPost);
router.get('/getallposts', getAllPosts);
router.get('/myposts', requiredLogin, myPosts);

module.exports = router