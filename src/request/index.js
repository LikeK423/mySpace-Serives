// 自动获取每个请求函数并放入requestFunction对象中
// 每个函数的键为 文件夹名+文件名

const fs = require('fs');

let requestFunction = {};

fs.readdirSync(__dirname).forEach( file =>{ // file:子文件夹
	if (file === 'index.js')return;
	fs.readdirSync(`${__dirname}/${file}`).forEach(f => { // f:每个子文件夹的请求函数文件
		let fName = f.split('.')[0];
		requestFunction[`${file}${fName}`] = require(`./${file}/${fName}`);
	})
})
console.log(requestFunction);


module.exports = requestFunction;