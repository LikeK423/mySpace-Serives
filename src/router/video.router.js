const Router = require('koa-router');

const videoRouter = new Router({prefix:'/api'});

const {
	biliVideoRecommend
} = require('../controller/video.controller');

console.log("文件 video.router.js OK");
videoRouter.get('/bili/video',biliVideoRecommend);// 获取BiliBili首页推荐视频信息

module.exports = videoRouter;

