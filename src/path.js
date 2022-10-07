// 安装的moduleAliases似乎没有代码提示，写起来有点麻烦

const path = require("path");
const f = (p)=>{
	if (p){
		return path.join(__dirname, p);
	}else {
		return __dirname;
	}
}

module.exports = {
	src:f(),
	app:f('app'),
	constants:f('constants'),
	controller:f('controller'),
	handle:f('handle'),
	middleware:f('middleware'),
	page:f('page'),
	request:f('request'),
	router:f('router'),
	service:f('service'),
	utils:f('utils')
}
