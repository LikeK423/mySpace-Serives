const fs = require('fs');

const catalogues =fs.readdirSync(__dirname);
let requestFunction = {};

// 遍历目录
for (let dir of catalogues){
	if (dir === 'index.js') continue;
	// 获取当前目录下的文件名
	let files =[];
	for (let file of fs.readdirSync(`${__dirname}/${dir}`)){
		files.push(file.split('.')[0])
	}
	// 根据文件名将导出的请求函数绑定到requestFunction对象上
	files.forEach((file)=>{
		const key = `${dir}${file}`;
		requestFunction[key] = require(`./${dir}/${file}`);
	})

}

// 导出请求函数对象
module.exports = requestFunction