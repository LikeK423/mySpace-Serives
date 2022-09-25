// 处理BiliBili视频推荐返回的JSON数据
const biliDataHandle = (jsonStr)=>{
	let data = jsonStr.data.item;
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

module.exports = {
	biliDataHandle
}