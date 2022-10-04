const Router = require('koa-router');

const {
	googleSearch,
	bingSearch,
	wangyiSearch,
	biliSearch
} = require('../controller/search.controller');


const searchRouter = new Router({prefix:'/api'});

searchRouter.get('/google/search',googleSearch);// 谷歌搜索 - 无效
searchRouter.get('/bing/search',bingSearch);// 必应搜索 - 无效
searchRouter.get('/wangyi/search',wangyiSearch);// 网易云搜索
searchRouter.get('/bili/search',biliSearch); // BiliBili搜索


module.exports = searchRouter;