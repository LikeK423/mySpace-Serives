const service = require('service/user.service');

module.exports = new class {
	// 注册用户
	async userRegister (ctx,next){
		const { name, account, password } = ctx.request.body;
		try {
			await service.userRegister(name, account, password)
			ctx.body = "用户注册成功~";
		}catch (e) {
			console.log(e);
		}
	}

	// 登录用户
	async userLogin(ctx, next){
		// 设置token令牌

		ctx.body = "登录成功~";
	}

	// 注销用户
	async deleteUser(ctx, next){

	}
}
