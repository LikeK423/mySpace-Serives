const Router = require('koa-router');

const musicRouter = new Router({prefix:'/api'});

const {
	wangyiSearch
} = require('../controller/music.controller');


musicRouter.get('/wangyi/music/search',wangyiSearch);// 获取搜索信息

module.exports = musicRouter;
