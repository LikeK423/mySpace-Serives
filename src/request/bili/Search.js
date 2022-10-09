const axiosRequest = require('utils/axios-request');
const objectToQuery = require('utils/objectToQuery');

module.exports = ({content, uid}) => {
	// 将query的字符串转变为对象
	const object = {
		// 其它参数不清楚具有什么用处
		func:'suggest',
		suggest_type:'accurate',
		sub_type:'tag',
		main_ver:'v1',
		highlight:'',
		userid:uid || '', // B站用户uid
		bangumi_acc_num:'1',
		special_acc_num:'1',
		topic_acc_num:'1',
		upuser_acc_num:'3',
		tag_num:'10',
		special_num:'10',
		bangumi_num:'10',
		upuser_num:'3',
		term:content,// 查询内容
		rnd:'0.18019345250340724',
		buvid:'1FFFE968-FA53-199A-B0B5-58014C09E65523798infoc',
		spmid:'333.1007'
	}

	const options = {
		url: `https://s.search.bilibili.com/main/suggest${objectToQuery(object)}`,
		method: 'GET'
	}
	return axiosRequest(options)
}
