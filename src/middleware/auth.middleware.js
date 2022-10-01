const userService = require('../service/user.service');
const errorTypes = require('../constants/error-types');

// 验证密码
const verifyPassword = async (ctx, next)=>{
	const { account, password } = ctx.request.body;
	const result = await userService.getUserByAccount(account);
	if(password !== result[0].password){
		const error = new Error(errorTypes.PASSWORD_ERROR);
		return ctx.app.emit('error', error, ctx);
	}
	await next();
}

module.exports = {
	verifyPassword
}