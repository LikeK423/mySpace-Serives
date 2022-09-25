const Koa = require('koa');

const useRouters = require('../router');


const app = new Koa();
app.useRouter = useRouters;


app.useRouter();// 自动注册路由


module.exports = app;