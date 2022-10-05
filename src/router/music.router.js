const Router = require('koa-router');

const musicRouter = new Router({prefix:'/api'});

const {
	getMusicUrl
} = require('../controller/music.controller');

musicRouter.get('/wangyi/music/play',getMusicUrl);// 获取BiliBili首页推荐视频信息


module.exports = musicRouter;
