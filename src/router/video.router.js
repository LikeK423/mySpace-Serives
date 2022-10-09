const Router = require('koa-router');

const videoRouter = new Router({prefix:'/api'});

const {
	biliVideoRecommend
} = require('controller/video.controller');

videoRouter.get('/bili/video/recommend',biliVideoRecommend);// 获取BiliBili首页推荐视频信息

module.exports = videoRouter;

