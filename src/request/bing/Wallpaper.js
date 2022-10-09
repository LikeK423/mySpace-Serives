const axiosRequest = require('utils/axios-request')
const objectToQuery =require('utils/objectToQuery');

module.exports = ({format,time,number,area})=>{
	const query = {
		format:format||'js', // 返回格式,js或者xml
		idx:time||'0',// 请求图片截止天数0-7
		n:number||'1',// 请求数量1-8
		mkt:area||'zh-CN'// 地区
	}
	const options = {
		url:`http://cn.bing.com/HPImageArchive.aspx${objectToQuery(query)}`,
		method: 'GET'
	}
	return axiosRequest(options)
}
