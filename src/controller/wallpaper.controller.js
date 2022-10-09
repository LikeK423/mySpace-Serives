const {
	bingWallpaper
} = require('request');
const bingHandle = require('handle/bing.handle');
const dataIsHandle = require("utils/dataIsHandle");


module.exports = new class {
	// 获取必应每日壁纸
	async getBingWallpaper(ctx,next){
		const {format,time,number,area,isHandle} = ctx.query;
		const result = await bingWallpaper({
			format:format,
			time:time,
			number:number,
			area:area
		});
		ctx.body = dataIsHandle(result,isHandle,bingHandle.wallpaperHandle);
	}
}
