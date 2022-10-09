const service = require('service/user.service');
const md5password = require('utils/password-handle');
const errorTypes = require('constants/error-types');

// 验证用户是否存在（不存在就调用next()）
const verifyUser = async (ctx, next) => {
	// 获取用户名和密码
	const { account } = ctx.request.body;
	// 判断这次注册的用户名是没有被注册过
	const result = await service.getUserByAccount(account);
	if (result.length) {
		const error = new Error(errorTypes.ACCOUNT_ALREADY_EXISTS);
		return ctx.app.emit('error', error, ctx);
	}

	await next();
}

// 加密密码
const encryptPassword = async (ctx, next) => {
	const { password } = ctx.request.body;
	ctx.request.body.password = md5password(password);

	await next();
}

module.exports = {
	verifyUser,
	encryptPassword
}