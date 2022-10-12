const errorTypes = require('constants/error-types');
const md5Password = require('utils/password-handle')

const wangyiJudgePassword = async (ctx, next)=>{
	// 判断传入密码类型
	const { account, password , md5password } = ctx.query;

	let p = password;

	if (!password && !md5password){// 缺少密码
		const error = new Error(errorTypes.THE_LACK_OF_PASSWORD);
		return ctx.app.emit('error', error, ctx);
	}else if ((password && md5password) || (!password && md5password)){// 传入了md5密码
		p = md5password;
	}else if((password && !md5password)){// 传入了未加密的密码
		p = md5Password(password)
	}

	ctx.user = {
		password:p,
		account:account
	}

	await next();
}

module.exports = {
	wangyiJudgePassword
}