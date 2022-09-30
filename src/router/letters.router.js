const Router = require('koa-router');

const lettersRouter = new Router({prefix:'/letters'});

const {
	submitLetter
} = require('../controller/letters.controller');

lettersRouter.post('/submit',submitLetter);// 提交信件

module.exports = lettersRouter;