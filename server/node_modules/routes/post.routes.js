const postController = require("../controller/post.controller");


const Router = require('express');
const router = new Router();


router.post('/post', postController.createPost);
router.get('/post', postController.getPostsByUser);
router.delete('/post/:id', postController.deletePost);



module.exports = router