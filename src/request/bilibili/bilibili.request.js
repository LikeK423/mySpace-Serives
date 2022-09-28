const https = require('https');

const {
	bilibili
} = require('../../constants/api-host');

const biliVideoRequest = number => {
	return new Promise((resolve, reject)=>{
		const options = {
			hostname: bilibili,
			path: `/x/web-interface/index/top/feed/rcmd?y_num=4&fresh_type=3&feed_version=V4&fresh_idx_1h=2&fetch_row=1&fresh_idx=2&brush=1&homepage_ver=1&ps=${number}`,
			method: 'GET'
		};
		const callBack = (res) => {
			let str = "";
			res.setEncoding('utf8');
			res.on('data', (chunk) => {
				str += chunk;
			});
			res.on("error", (err) => {
				reject(err);
			});
			res.on("end",()=>{
				resolve(JSON.parse(str));
			})
		}
		https.request(options, callBack).end();
	})
}

module.exports = {
	biliVideoRequest
}