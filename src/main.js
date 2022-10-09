require('module-alias/register');
const app = require('app');
const config = require('app/config');

app.listen(config.APP_PORT,()=>{
	console.log(`服务器在${config.APP_PORT}端口启动成功  http://localhost:${config.APP_PORT}`);
})