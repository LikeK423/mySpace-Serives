const wangyiSearch = require('../request/wangyi/search');
const {
	searchDateHandle
} = require('../handle/wangyi.handle');

const dataIsHandle = require('../utils/dataIsHandle');

class musicController {
	// 获取网易云音乐搜索数据
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
		ctx.body = dataIsHandle(result, isHandle, searchDateHandle);
	}
}

module.exports = new musicController();