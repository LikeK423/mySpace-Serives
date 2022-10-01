const dataIsHandle = require("../utils/dataIsHandle");
const wangyiHandle = require("../handle/wangyi.handle");
const biliHandle = require("../handle/bili.handle");

const wangyiSearch = require('../request/wangyi/search');
const biliVideoSearch = require('../request/bilibili/search');

class SearchController{
	// 谷歌搜索
	async googleSearch(ctx, next){

	}

	// 必应搜索
	async bingSearch(ctx, next){

	}

	// 网易云搜索
	async wangyiSearch(ctx, next){
		const { name, type, limit, offset, isHandle } = ctx.request.query;
		const dates = {
			s:name,
			type:1,// 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
			limit:limit || 10, // 默认10
			offset:offset || 0, // 默认0
			csrf_token: ''
		}
		const result = await wangyiSearch(dates);
		ctx.body = dataIsHandle(result, isHandle, wangyiHandle.searchDateHandle);
	}

	// BiliBili搜索
	async biliSearch (ctx, next){
		const { searchStr, uid, isHandle } = ctx.request.query;
		const result = await biliVideoSearch({
			searchStr:encodeURI(searchStr),
			uid:uid,
		});
		ctx.body = dataIsHandle(result,isHandle,biliHandle.searchDataHandle);
	}
}

module.exports = new SearchController()