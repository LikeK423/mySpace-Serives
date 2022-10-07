// 函数名=文件夹名+文件名

module.exports = {
	biliSearch : require('./bili/Search'),
	biliVideoRecommend : require('./bili/VideoRecommend'),

	googleSearch : require('./google/Search'),

	bingSearch : require('./bing/Search'),

	wangyiSearch : require('./wangyi/Search'),
	wangyiGetSongUrl : require('./wangyi/GetSongUrl')
}