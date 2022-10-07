const encrypt = require('../../utils/wangyi-crypto')
const axiosRequest = require('../../utils/axios-request');
const { URLSearchParams } = require("url");

module.exports = (dates)=>{
	let options = {
		method:  'POST',
		url:  'https://music.163.com/weapi/song/enhance/player/url/v1',// 这个 https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token= 也行
		data: new URLSearchParams(encrypt(dates)).toString()
	}
	return axiosRequest(options)
}
