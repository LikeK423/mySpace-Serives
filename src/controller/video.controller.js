const biliVideoRecommend = require('../request/bilibili/videoRecommend');
const biliVideoSearch = require('../request/bilibili/search');
const {
	recommendDataHandle,
	searchDataHandle
} = require('../handle/bili.handle');

class VideoController {
	// BiliBili视频推荐
	 async biliVideoRecommend (ctx, next){
		 // 根据query获取需要返回的视频数量
		 const { number } = ctx.request.query;
		 // 获取请求回来的数据
		 let result = await biliVideoRecommend(number);
		 // 对请求回来的数据进行处理并返回
		 ctx.body = recommendDataHandle(result);
	}

	// BiliBili视频搜索
	async biliVideoSearch (ctx, next){
	  const { searchStr, uid } = ctx.request.query;
		const result = await biliVideoSearch({
			searchStr:encodeURI(searchStr),
			uid:uid,
		});
		ctx.body = searchDataHandle(result);
	}
}

module.exports = new VideoController();