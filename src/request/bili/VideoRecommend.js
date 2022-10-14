const axiosRequest = require('utils/axios-request');
const objectToQuery = require("utils/objectToQuery");

module.exports = (number, refresh) => {
	const object = {
		y_num:'4',
		fresh_type:'3',
		feed_version:'V4',
		fresh_idx_1h:refresh||'1',// refresh应该是跟刷新有关的，每次刷新加1
		fetch_row:'1',
		fresh_idx:refresh||'1',
		brush:refresh||'1',
		homepage_ver:'1',
		ps:number // 返回视频数量
	};
	const options = {
		url: `https://api.bilibili.com/x/web-interface/index/top/feed/rcmd${objectToQuery(object)}`,
		method: 'GET'
	};
	return axiosRequest(options)
}
