require('module-alias/register');
const axiosRequest = require('utils/axios-request');
const {URLSearchParams} = require("url");
const md5 = require('utils/password-handle');

function foo(){
	let h = {
		'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1',
		'Content-Type': 'application/x-www-form-urlencoded',
		Referer: 'https://music.163.com',
		'X-Real-IP': '::1',
		'X-Forwarded-For': '::1',
		Cookie: 'Webstorm-76c92d5f=4132a8a8-5882-4c88-a03a-4724b68619be; NMTID=7defea73cc93f2e2aae866b95bd6684b; __remember_me=true; MUSIC_U=1cd7d29435948087d4f15e2cdc45754d2727f858c15b5b4037aee275601d33f7993166e004087dd38cf1b8e9c296e96b0fa7a3a3f4810f58aca5da9bdee4739d3d0b00ae59a037547a561ba977ae766d; __csrf=e9827924f61d9c9d58c9dd85f99457d3; os=pc; appver=2.9.7; _ntes_nuid=d270056c1c8244026ac53f3f37161d5c'

	}
	let data = {
		phone:'13509641233',
		password:md5('03.1.25gjp'),
		countrycode: '86',
		rememberLogin: 'true',
	}
	const options = {
		url:  'https://music.163.com/api/login/cellphone',
		method: 'POST',
		data: new URLSearchParams(data).toString(),
		headers:h
	};
	return axiosRequest(options)
}

async function bar(){
	const r =await foo();
	console.log(1);
	console.log('r=>',r)
}


bar()
