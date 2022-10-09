const dataIsHandle = require("utils/dataIsHandle");

const wangyiHandle = require("handle/wangyi.handle");
const biliHandle = require("handle/bili.handle");
const googleHandle = require('handle/google.handle');
const bingHandle = require('handle/google.handle');

const {
	googleSearch,
	bingSearch,
	wangyiSearch,
	biliSearch
} = require('../request');


module.exports = new class{
	// 谷歌搜索
	async googleSearch(ctx, next){
		const { content, isHandle } = ctx.request.query;
		const result = await googleSearch(content);
		ctx.response.set('content-type', "application/txt; charset=UTF-8");
		ctx.body = dataIsHandle(result, isHandle, googleHandle.searchDateHandle);
	}

	// 必应搜索
	async bingSearch(ctx, next){
		const { content, isHandle } = ctx.request.query;
		const result = await bingSearch(content);
		ctx.response.set('content-type', "text/html");
		ctx.body = dataIsHandle(result, isHandle, bingHandle.searchDateHandle);
	}

	// 网易云搜索
	async wangyiSearch(ctx, next){
		const { content, type, limit, offset, isHandle } = ctx.request.query;
		const result = await wangyiSearch({
			s:content,
			type:1,// 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
			limit:limit || 10, // 默认10
			offset:offset || 0, // 默认0
			csrf_token: ''
		});
		ctx.body = dataIsHandle(result, isHandle, wangyiHandle.searchDateHandle);
	}

	// BiliBili搜索
	async biliSearch (ctx, next){
		const { content, uid, isHandle } = ctx.request.query;
		const result = await biliSearch({
			content:content,
			uid:uid,
		});
		ctx.body = dataIsHandle(result,isHandle,biliHandle.searchDataHandle);
	}
}
