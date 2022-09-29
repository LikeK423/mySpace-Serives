class BiliHandle {
	// 处理视频推荐返回的JSON数据
	recommendDataHandle (jsonData) {
		let data = jsonData.data.item;
		let result = [];
		for (let item of data){
			const {
				bvid,
				title,
				pic,
				uri,
			} = item;
			const x = {
				videoId: bvid,
				videoTitle: title,
				videoPicture: pic,
				videoUrl: uri,
				userName:item.owner.name,
				userAvatar:item.owner.face,
				userSpace:`https://space.bilibili.com/${item.owner.mid}`
			};
			result.push(x);
		}
		return result;
	}

	// 处理搜索返回的关键词
	searchDataHandle (jsonData){
		// encodeURI(searchStr)
		let result = [];
		jsonData.result.tag.forEach((item)=>{
			result.push({
				value:item.value,
				searchUrl:`https://search.bilibili.com/all?keyword=${encodeURI(item.value)}&from_source=webtop_search&spm_id_from=333.1007&search_source=5` // 根据PC端网页获取的路径
			})
		});
		return result
	}
}

module.exports = new BiliHandle()