# mySpace-Services



# 简介

基于KOA框架的个人空间服务器代码

已经部署到服务器上，把localhost换成https://www.k423.space:80





# 项目运行

配置.env文件 (默认使用80端口)

```
APP_PORT=80 
```

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





# 功能




## 1.B站视频推荐 

1.1 请求实例：

> localhost:80/api/bili?number=2

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

3.3 传入参数说明：

|  参数名   | 类型 |   描述   | 是否必需 |
| :-------: | :--: | :------: | :------: |
| searchStr | STR  | 搜索内容 |    是    |

3.4 返回类型：

```json
[ "1" , "2" , "3" , "4"]
```

3.5  返回参数说明

没啥参数，直接返回搜索关键词



# 一些相关的文档

不一定是否有用

> Bilibili API 第三方文档：https://qinshixixing.gitbooks.io/bilibiliapi/content/
>
> 哔哩哔哩-API收集整理：https://github.com/SocialSisterYi/bilibili-API-collect
>
> 网易云音乐 NodeJS 版 API：https://binaryify.github.io/NeteaseCloudMusicApi/#/

