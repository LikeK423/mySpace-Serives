const Router = require('koa-router');

const loginRouter = new Router({prefix:'/api'});

const {
	wangyiLoginPhone,
	wangyiLoginMailbox,
	wangyiLoginQr,
	wangyiLoginStatus
} = require('controller/login.controller');
const {
	wangyiJudgePassword
} = require('middleware/login.middleware')

loginRouter.get('/wangyi/login/qr',wangyiLoginQr);// 网易云登录（二维码）
loginRouter.get('/wangyi/login/check',wangyiLoginStatus);// 网易云登录状态检查
loginRouter.get('/wangyi/login/phone',wangyiJudgePassword,wangyiLoginPhone);// 网易云登录（手机）
loginRouter.get('/wangyi/login/mailbox',wangyiJudgePassword,wangyiLoginMailbox);// 网易云登录（邮箱）

module.exports = loginRouter;
