/*
* 使用axios进行请求
* */

const axios = require("axios");

const axiosRequest =  (options)=>{
	return new Promise((resolve, reject)=>{
		axios(options)
			.then(res=>{
				resolve(res.data);
			})
			.catch(error=>{
				reject(error);
			})
	})
}

module.exports = axiosRequest