const Router = require('koa-router');

const musicRouter = new Router({prefix:'/api'});

const {
	getMusicUrl
} = require('controller/music.controller');

musicRouter.get('/wangyi/music/play',getMusicUrl);// 获取网易云音乐url

module.exports = musicRouter;
