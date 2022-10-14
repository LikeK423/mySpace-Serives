const {
	biliVideoRecommend
} = require('request');
const dataIsHandle = require('utils/dataIsHandle');
const {
	recommendDataHandle,
} = require('handle/bili.handle');


module.exports = new class{
	// BiliBili视频推荐
	 async biliVideoRecommend (ctx, next){
		 // 根据query获取需要返回的视频数量
		 const { number, refresh, isHandle } = ctx.request.query;
		 // 获取请求回来的数据
		 let result = await  biliVideoRecommend(number?number:10, refresh);
		 // 对请求回来的数据进行处理并返回
		 ctx.body = recommendDataHandle(result,isHandle);
	}

}
