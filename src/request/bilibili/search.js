const axiosRequest = require('../../utils/axios-request');

const search = searchStr => {

	const options = {
		url: `https://s.search.bilibili.com/main/suggest?func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&userid=&bangumi_acc_num=1&special_acc_num=1&topic_acc_num=1&upuser_acc_num=3&tag_num=10&special_num=10&bangumi_num=10&upuser_num=3&term=${searchStr}&rnd=0.18019345250340724&buvid=1FFFE968-FA53-199A-B0B5-58014C09E65523798infoc&spmid=333.1007`,
		method: 'GET'
	}
	return axiosRequest(options)
}

module.exports = search