const Koa = require('koa');
const useRouters = require('../router');
const bodyParser = require('koa-bodyparser');
const errorHandle = require('./error-handle');

const app = new Koa();
app.useRouter = useRouters;

app.use(bodyParser());
app.useRouter();// 自动注册路由
app.on('error',errorHandle)

module.exports = app;