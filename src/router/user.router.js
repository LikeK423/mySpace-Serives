const Router = require('koa-router');

const {
	userRegister,
	userLogin,
	deleteUser
} = require('controller/user.controller');
const {
	verifyUser,
	encryptPassword
} = require("../middleware/user.middleware");
const {
	verifyPassword
} = require("../middleware/auth.middleware");

const userRouter = new Router({prefix:'/user'});

userRouter.post('/create',verifyUser,encryptPassword,userRegister);// 用户注册
userRouter.post('/login',encryptPassword,verifyPassword,userLogin);// 用户登录
// userRouter.delete('/delete',deleteUser);// 用户注销
module.exports = userRouter;
