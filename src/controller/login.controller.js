const {
	wangyiLoginPhone,
	wangyiLoginMailbox,
	wangyiLoginQrCreate,
	wangyiLoginQrCheck,
	wangyiLoginQrKey
} = require('request');


module.exports = new class {
	//网易云登录（手机账号）
	async wangyiLoginPhone(ctx,next){
		// 获取参数
		const { account, password } = ctx.user;
		// 返回请求结果
		ctx.body = await wangyiLoginPhone(account, password);
	}

	//网易云登录（网易邮箱账号）
	async wangyiLoginMailbox(ctx,next){
		// 获取参数
		const { account, password } = ctx.user;
		// 返回请求结果
		ctx.body = await wangyiLoginMailbox(account, password);
	}

	// 网易云登录（二维码登录）
	async wangyiLoginQr(ctx, next){
		// 获取二维码key
		const {unikey} = await wangyiLoginQrKey();
		// 获取二维码图片
		ctx.body = await wangyiLoginQrCreate(unikey);
	}

	async wangyiLoginStatus(ctx, next){
		const {key} = ctx.query;
		ctx.body = await wangyiLoginQrCheck(key);
	}
}
