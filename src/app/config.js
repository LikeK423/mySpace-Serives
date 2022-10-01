// noinspection JSValidateTypes

const dotenv = require('dotenv');

dotenv.config();// 加载.env配置文件

const {
	APP_PORT,
	MYSQL_HOST,
	MYSQL_PORT,
	MYSQL_DATABASE,
	MYSQL_USER,
	MYSQL_PASSWORD,
}  = process.env;

module.exports =  {
	APP_PORT,
	MYSQL_HOST,
	MYSQL_PORT,
	MYSQL_DATABASE,
	MYSQL_USER,
	MYSQL_PASSWORD,
}

