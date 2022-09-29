module.exports = ( result, isHandle, f )=>{
	return isHandle === 'false'?result:f(result) // result是请求回来的数据 f(result)是处理过后的数据
}