const Router = require('koa-router');

const wallpaperRouter = new Router({prefix:'/api'});

const {
	getBingWallpaper
} = require('controller/wallpaper.controller');

wallpaperRouter.get('/bing/wallpaper',getBingWallpaper);// 获取必应每日壁纸

module.exports = wallpaperRouter;