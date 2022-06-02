const express =require('express')

const userRouter = express.Router();

const {
    getUser,
    postUser,
    putUser,
    getAllUser
} = require('../../controller/user');
const { route } = require('../admin/signupAdmin');

userRouter.route('/')
.get(getAllUser)
.post(postUser)

userRouter.route('/:userid')
.get(getUser)
.put(putUser)

module.exports = userRouter;