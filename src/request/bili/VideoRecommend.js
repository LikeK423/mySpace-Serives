const axiosRequest = require('../../utils/axios-request');
const objectToQuery = require("../../utils/objectToQuery");

const videoRecommend = number => {
	const object = {
		y_num:'4',
		fresh_type:'3',
		feed_version:'V4',
		fresh_idx_1h:'2',
		fetch_row:'1',
		fresh_idx:'2',
		brush:'1',
		homepage_ver:'1',
		ps:number
	};
	const options = {
		url: `https://api.bilibili.com/x/web-interface/index/top/feed/rcmd${objectToQuery(object)}`,
		method: 'GET'
	};
	return axiosRequest(options)
}

module.exports = videoRecommend
