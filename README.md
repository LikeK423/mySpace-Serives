# mySpace-Services



# 简介

基于KOA框架的个人空间服务器代码

已经部署到服务器上，把localhost换成https://www.k423.space:80



# 项目的一些说明

## 运行

安装依赖

```js
npm install 
```

本地运行

```
npm start
或者
node ./src/main.js
或者
nodemon ./src/main.js
```

## 文件配置

在src的同级目录下配置.env文件，文件内容如下

```
APP_PORT=80 // 服务器使用端口
```



## 数据

请求其它网站API返回的数据很多，无法判断其用处，因此都是默认返回处理过的数据。如果需要未经处理的数据，可以在请求时传入isHandle，值为false

> 例：localhost:80/api/bili/video/recommend?number=10&isHandle=1  





目前一些API接口是从PC端网页爬取的，对于移动端是否会有什么不同尚不清楚





# 功能




## 1.B站视频推荐 

1.1 请求实例：

> localhost:80/api/bili/video/recommend?number=10

1.2 请求方式：GET

1.3 传入参数说明：

| 参数名 | 类型 |     描述     | 是否必需 |
| :----: | :--: | :----------: | :------: |
| number | INT  | 返回视频数量 |    是    |

1.4 返回类型：

```json
[
    {
        "videoId": "xxx",
        "videoTitle": "xxx",
        "videoPicture": "xxx",
        "videoUrl": "xxx",
        "userName": "xxx",
        "userAvatar": "xxx",
        "userSpace": "xxx"
    }
]
```

1.5  返回参数说明

|    参数名    |     描述     |
| :----------: | :----------: |
|   videoId    |   视频BV号   |
|  videoTitle  |   视频标题   |
| videoPicture | 视频封面地址 |
|   videoUrl   |   视频地址   |
|   userName   |   作者名称   |
|  userAvatar  | 作者头像地址 |
|  userSpace   | 作者空间地址 |







## 2. 网易云音乐搜索

2.1 请求实例：

> localhost:80/api/wangyi/music/search?name=周杰伦

2.2 请求方式：GET

2.3 传入参数说明：

| 参数名 | 类型 |                     描述                     | 是否必需 |
| :----: | :--: | :------------------------------------------: | :------: |
|  name  | STR  |                   搜索内容                   |    是    |
|  type  | INT  |              搜索类型(默认歌曲)              |    否    |
| limit  | INT  | 返回歌曲数量n（n <= limit 已排除无版权歌曲） |    否    |
| offset | INT  |          这个参数似乎有点问题。。。          |    否    |

2.4 返回类型：

```json
[
    {
        "songName": "xxx",
        "songId": "xxx",
        "singer": "xxx",
        "albumId": "xxx",
        "albumName": "xxx",
        "albumCoverUrl": "xxx"
    }
]
```

2.5  返回参数说明

|    参数名     |      描述      |
| :-----------: | :------------: |
|   songName    |     歌曲名     |
|    songId     |     歌曲ID     |
|    singer     |      歌手      |
|    albumId    | 歌曲所属专辑ID |
|   albumName   |     专辑名     |
| albumCoverUrl |  专辑封面Url   |



## 3. B站搜索

3.1 请求实例

> localhost/api/bili/search?searchStr=舞蹈区

3.2 请求方式：GET

3.3 传入参数说明

|  参数名   | 类型 |   描述   | 是否必需 |
| :-------: | :--: | :------: | :------: |
| searchStr | STR  | 搜索内容 |    是    |
|    uid    | INT  | 用户UID  |    否    |

3.4 返回类型

```json
[
    {
        "value":"xxx",
        "searchUrl":"xxx"
	}
]
```

3.5  返回参数说明

|  参数名   |     描述     |
| :-------: | :----------: |
|   value   | 搜索结果内容 |
| searchUrl | 搜索结果URL  |





## 4. 用户注册

4.1 请求实例

> localhost/user/create

4.2 请求方法：POST

4.3 传入参数

​	  传入json，用户名，账号，密码

```
{
    "name": "张三",
    "account": "12ses",
    "password": "asc"
}
```

4.4 返回参数

​	暂无





# 一些相关的文档

不一定是否有用

> Bilibili API 第三方文档：https://qinshixixing.gitbooks.io/bilibiliapi/content/
>
> 哔哩哔哩-API收集整理：https://github.com/SocialSisterYi/bilibili-API-collect
>
> 网易云音乐 NodeJS 版 API：https://binaryify.github.io/NeteaseCloudMusicApi/#/

