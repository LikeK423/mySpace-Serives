function msToMin(ms){
	let r =( ms / 1000).toFixed(0);
	return `${Math.floor(r/60)}:${r%60}`
}

module.exports = new class {
	// 处理搜索返回的JSON数据
	searchDateHandle(jsonData){
		let data = ""
		try {
			data = jsonData.result.songs.map((item)=>{
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
		}catch (e) {return `请求数据处理错误,请更换参数或者添加isHandle=false查看返回原数据`}
		return data
	}

	// 处理音乐播放链接数据
	musicUrlHandle(jsonData){
		if (!jsonData.data[0].url){
			return `该歌曲没有外部播放链接，可能没有版权或者需要会员之类的，以后考虑增加登录功能来获取cookie`
		}
		return jsonData.data.map(item=>{
			return {
				id:item.id,
				url:item.url,
				size: `${(item.size/1024/1024).toFixed(3)} MB`,
				md5:item.md5,
				type:item.type,
				time:msToMin(item.time)
			}

		});
	}
}