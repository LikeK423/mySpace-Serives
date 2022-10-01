const connection = require('../app/database');

class UserService {
	// 数据库创建用户信息
	async userRegister(userName, userAccount, userPassword){
		const statement = `INSERT INTO users (name , account ,password ) VALUES(?,?,?);`;
		const [result] = await connection.execute(statement,[userName, userAccount, userPassword]);
		return result;
	}

	// 根据账号查找用户
	async getUserByAccount(account){
		const statement = `select * from users WHERE account=?;`;
		const [result] = await connection.execute(statement,[account]);
		return result;
	}

	// 注銷用戶
	async deleteUser(){

	}


}

module.exports = new UserService();