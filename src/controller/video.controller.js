const biliVideoRecommend = require('../request/bilibili/videoRecommend');
const dataIsHandle = require('../utils/dataIsHandle');
const {
	recommendDataHandle,
} = require('../handle/bili.handle');



class VideoController {
	// BiliBili视频推荐
	 async biliVideoRecommend (ctx, next){
		 // 根据query获取需要返回的视频数量
		 const { number, isHandle } = ctx.request.query;
		 // 获取请求回来的数据
		 let result = await biliVideoRecommend(number?number:10);
		 // 对请求回来的数据进行处理并返回
		 ctx.body = dataIsHandle(result,isHandle,recommendDataHandle);
	}

}

module.exports = new VideoController();