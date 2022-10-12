// 函数名=文件夹名+文件名

module.exports = {
	// B站
	biliSearch : require('./bili/Search'),
	biliVideoRecommend : require('./bili/VideoRecommend'),

	// 谷歌
	googleSearch : require('./google/Search'),

	// 必应
	bingSearch : require('./bing/Search'),
	bingWallpaper : require('./bing/Wallpaper'),

	// 网易云
	wangyiLoginPhone : require('./wangyi/login_phone'),
	wangyiLoginMailbox : require('./wangyi/login_mailbox'),
	wangyiLoginQrKey : require('./wangyi/login_qr_key'),
	wangyiLoginQrCreate:require('./wangyi/login_qr_create'),
	wangyiLoginQrCheck:require('./wangyi/login_qr_check'),
	wangyiSearch : require('./wangyi/search'),
	wangyiGetSongUrl : require('./wangyi/get_song_url'),

}