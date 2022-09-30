const Router = require('koa-router');

const userRouter = new Router({prefix:'/user'});

const {
	userRegister
} = require('../controller/user.controller');


userRouter.post('/create',userRegister);// 用户注册

module.exports = userRouter;
