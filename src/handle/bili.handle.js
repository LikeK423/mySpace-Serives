class BiliHandle {
	// 处理视频推荐返回的JSON数据
	recommendDataHandle (jsonData) {
		return jsonData.data.item.map((item)=>{
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
	}

	// 处理搜索返回的关键词
	searchDataHandle (jsonData){
		return jsonData.result.tag.map((item) => {
			return {
				value: item.value,
				searchUrl: `https://search.bilibili.com/all?keyword=${encodeURI(item.value)}&from_source=webtop_search&spm_id_from=333.1007&search_source=5` // 根据PC端网页获取的路径
			}
		})
	}
}

module.exports = new BiliHandle()