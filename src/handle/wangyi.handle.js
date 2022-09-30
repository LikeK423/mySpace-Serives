class wangyiHandle {
	// 处理搜索返回的JSON数据
	searchDateHandle(jsonData){
		const data = jsonData.result.songs;
		let result = [];
		for(let item of data){
			let authors = "";
			for (let x of item.ar){
				authors += `${x.name} `;
			}
			result.push({
				songName:item.name,
				songId:item.id,
				singer:authors,
				albumId:item.al.id,
				albumName:item.al.name,
				albumCoverUrl:item.al.picUrl,
				copyright:item.copyright
			})
		}
		return result;
	}
}

module.exports = new wangyiHandle();