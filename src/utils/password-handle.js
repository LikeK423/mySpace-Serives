const crypto = require('crypto');

// 对密码进行md5加密
const md5password = (password) => {
	return crypto.createHash('md5').update(password).digest('hex')
}

module.exports = md5password;