const encrypt = require('../../utils/wangyi-crypto')
const axiosRequest = require('../../utils/axios-request');
const { URLSearchParams } = require("url");

// const headers = {
// 	'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.30 Safari/537.36',
// 	'Content-Type': 'application/x-www-form-urlencoded',
// 	Referer: 'https://music.163.com',
// 	'X-Real-IP': '::1',
// 	'X-Forwarded-For': '::1',
// 	Cookie: 'Webstorm-76c92d5f=4132a8a8-5882-4c88-a03a-4724b68619be; __remember_me=true; NMTID=3c32c61ea024d8e715ce014df4daf5a5; _ntes_nuid=3c5cc4855a27485e8e4c90fbceae41d7; MUSIC_A=bf8bfeabb1aa84f9c8c3906c04a04fb864322804c83f5d607e91a04eae463c9436bd1a17ec353cf780b396507a3f7464e8a60f4bbc019437993166e004087dd32d1490298caf655c2353e58daa0bc13cc7d5c198250968580b12c1b8817e3f5c807e650dd04abd3fb8130b7ae43fcc5b'
// }


module.exports = (dates)=>{
	let options = {
		method:  'POST',
		url:  'https://music.163.com/weapi/cloudsearch/get/web',// 这个 https://music.163.com/weapi/cloudsearch/get/web?csrf_token= 也行
		data: new URLSearchParams(encrypt(dates)).toString(),
		// headers: headers
		// httpAgent: new http.Agent({ keepAlive: true }),
		// httpsAgent: new https.Agent({ keepAlive: true }),
	}
	return axiosRequest(options)
}
