const {
	bingWallpaper
} = require('request');
const dataIsHandle = require("utils/dataIsHandle");


module.exports = new class {
	// 获取必应每日壁纸
	async getBingWallpaper(ctx,next){
		const {} = ctx.query;
		try {
			ctx.body = await bingWallpaper()
		}catch (e){
			ctx.body = e
		}

	}
}
