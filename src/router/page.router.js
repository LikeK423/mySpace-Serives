const Router = require('koa-router');

const pageRouter = new Router();

const {
	returnSamplePage,
} = require('../controller/page.controller');

pageRouter.get('/',returnSamplePage);

module.exports = pageRouter;