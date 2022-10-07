const {
	wangyiGetSongUrl
} = require('../request');
const dataIsHandle = require("../utils/dataIsHandle");
const wangyiHandle = require("../handle/wangyi.handle");

module.exports = new class {
	// 获取网易云音乐播放链接
	async getMusicUrl(ctx,next){
		const { id, level, isHandle } = ctx.query;
		const data = {
			ids: `[${id}]`,// 歌曲ID
			level: level || 'standard',// 音质 standard, exhigh, lossless, hires
			encodeType: 'flac',
		}
		const result = await wangyiGetSongUrl(data);
		ctx.body = dataIsHandle(result,isHandle,wangyiHandle.musicUrlHandle)
	}
}
