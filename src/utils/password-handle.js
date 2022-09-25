const crypto = require('crypto');

// 对密码进行md5加密
const md5password = (password) => {
	const md5 = crypto.createHash('md5');// 创建并返回一个 Hash 对象
	return md5.update(password).digest('hex');
}

module.exports = md5password;