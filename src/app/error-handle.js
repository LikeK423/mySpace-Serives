const errorTypes = require('../constants/error-types');

const errorHandler = (error, ctx) => {
	let status, message;
	switch (error.message) {
		case errorTypes.ACCOUNT_ALREADY_EXISTS:
			status = 400;
			message = "账号已存在~";
			break;
		default:
			status = 404;
			message = "未知错误~";
	}
	ctx.status = status;
	ctx.body = message;
}

module.exports = errorHandler;
