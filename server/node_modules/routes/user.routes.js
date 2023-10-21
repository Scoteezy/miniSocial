const userController = require("../controller/user.controller");

const Router = require('express');
const router = new Router();


router.post('/user', userController.createUser);
router.get('/user', userController.getUsers);
router.get('/user/login',userController.authUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
module.exports = router