const axiosRequest = require('utils/axios-request')
const objectToQuery =require('utils/objectToQuery');

module.exports = ()=>{
	const query = {
		format:'js',
		idx:'0',
		n:'2'
	}
	const options = {
		url:`http://cn.bing.com/HPImageArchive.aspx${objectToQuery(query)}`,
		method: 'GET'
	}
	return axiosRequest(options)
}
