const Router = require('koa-router');

const videoRouter = new Router({prefix:'/api'});

const {
	biliVideoRecommend,
	biliVideoSearch
} = require('../controller/video.controller');


videoRouter.get('/bili/video/recommend',biliVideoRecommend);// 获取BiliBili首页推荐视频信息
videoRouter.get('/bili/video/search',biliVideoSearch); // 获取BIliBili搜索返回的关键词

module.exports = videoRouter;

