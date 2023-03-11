const express = require('express');
const router = express.Router();
const movieRouter = require('./movies');
const UserController = require('../controllers/userController')

router.post('/register', UserController.userRegister)
router.post('/login', UserController.userLogin)

router.use('/movies', movieRouter);

module.exports = router;