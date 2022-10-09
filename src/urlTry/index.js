require('module-alias/register');
const axiosRequest = require('utils/axios-request');

function foo(){
	const options = {
		url: `http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1`,
		method: 'GET'
	};
	return axiosRequest(options)
}

async function bar(){
	const r =await foo();
	console.log(r)
}

module.exports = bar;

