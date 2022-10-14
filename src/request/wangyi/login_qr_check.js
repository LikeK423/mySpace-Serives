const { URLSearchParams } = require("url");
const axiosRequest = require('utils/axios-request');
const encrypt = require('utils/wangyi-crypto');

module.exports = (key)=>{
	let h = {
		crypto: 'weapi',
		Cookie:'Webstorm-76c92d5f=4132a8a8-5882-4c88-a03a-4724b68619be; NMTID=8ed508aca8b93be9f34d9826ea4b5080; __remember_me=true; MUSIC_U=1cd7d29435948087d4f15e2cdc45754d099e305ad44df8d0713eebbcb87494b8993166e004087dd36a8adb2a84e458c6e8a0d7994fc68d0aaca5da9bdee4739d3d0b00ae59a03754d4dbf082a8813684; __csrf=31069a534f91cbc61cec75cc16665693; _ntes_nuid=0a6aca2e37b5cc7f5dcbaf24dd430ca1'
	}
	let data = {
		type:1,
		key:key,
	}

	let options = {
		method:  'POST',
		url:  `https://music.163.com/weapi/login/qrcode/client/login`,
		data: new URLSearchParams(encrypt(data)).toString(),
		headers:h
	}
	return axiosRequest(options)
}
