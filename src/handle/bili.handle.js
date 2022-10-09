module.exports = new class {
	// 处理视频推荐返回的JSON数据
	recommendDataHandle (jsonData) {
		let data = "";
		try {
			data = jsonData.data.item.map((item)=>{
				return {
					videoId: item.bvid,
					videoTitle: item.title,
					videoPicture: item.pic,
					videoUrl: item.uri,
					userName:item.owner.name,
					userAvatar:item.owner.face,
					userSpace:`https://space.bilibili.com/${item.owner.mid}`
				};
			})
		}catch (e) {return `请求数据处理错误,请更换参数或者添加isHandle=false查看返回原数据`}
		return data
	}

	// 处理搜索返回的关键词
	searchDataHandle (jsonData){
		let data = "";
		try {
			data = jsonData.result.tag.map((item) => {
				return {
					value: item.value,
					searchUrl: `https://search.bilibili.com/all?keyword=${encodeURI(item.value)}&from_source=webtop_search&spm_id_from=333.1007&search_source=5` // 根据PC端网页获取的路径
				}
			})
		}catch (e) {return `请求数据处理错误,请更换参数或者添加isHandle=false查看返回原数据`}
		return data
	}
}

