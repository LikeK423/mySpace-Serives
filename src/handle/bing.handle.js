function dateHandle(date){
	let year = date.substring(0,4);
	let month = date.substring(4,6);
	let day = date.substring(6);
	return `${year}-${month}-${day}`
}

module.exports = new class {
	wallpaperHandle(jsonData){
		let data="";
		try {
			data = jsonData.images.map(item=>{
				return {
					data:dateHandle(item.startdate),
					title:item.title,
					description:item.copyright,
					descriptionSearch:item.copyrightlink,
					imgUrl:`https://bing.com${item.url}`
				}
			});
		}catch (e) {
			return `请求数据处理错误,请更换参数或者添加isHandle=false查看返回原数据`
		}
		return data
	}
}