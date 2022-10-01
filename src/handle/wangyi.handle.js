class wangyiHandle {
	// 处理搜索返回的JSON数据
	searchDateHandle(jsonData){
		return jsonData.result.songs.map((item)=>{
			let authors = "";
			for (let x of item.ar){
				authors += `${x.name} `;
			}
			return {
				songName:item.name,
				songId:item.id,
				singer:authors,
				albumId:item.al.id,
				albumName:item.al.name,
				albumCoverUrl:item.al.picUrl,
				copyright:item.copyright
			}
		})
	}
}

module.exports = new wangyiHandle();