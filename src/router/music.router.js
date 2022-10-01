const Router = require('koa-router');

const musicRouter = new Router({prefix:'/api'});

const {

} = require('../controller/music.controller');



module.exports = musicRouter;
