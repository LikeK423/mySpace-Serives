const requestFunction = require('../request');
const {
	biliDataHandle
} = require('../utils/request-data-handel');

class VideoController {
	// BiliBili视频推荐
	 async biliVideoRecommend(ctx, next){
		 // 根据query获取需要返回的视频数量
		 const { number } = ctx.request.query;
		 // 获取请求回来的数据
		 let result = await requestFunction.biliVideoRecommend(number);
		 // 对请求回来的数据进行处理并返回
		 ctx.body = biliDataHandle(result);
	}

}

module.exports = new VideoController();