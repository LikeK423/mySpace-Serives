const Router = require('koa-router');

const lettersRouter = new Router({prefix:'/letters'});

const {
	submitLetter,
	deleteLetter
} = require('../controller/letters.controller');

lettersRouter.post('/submit',submitLetter);// 提交信件
lettersRouter.delete('/delete',deleteLetter)// 删除信件

module.exports = lettersRouter;