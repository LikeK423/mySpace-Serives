# mySpace-Services



# 简介

基于KOA框架的个人空间服务器代码

已经部署到服务器上，把localhost换成https://www.k423.space:8888



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
APP_PORT=8888 // 服务器使用端口

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=k423 
MYSQL_USER=root
MYSQL_PASSWORD=12345678
```



## 请求返回的数据

请求其它网站API返回的数据很多，无法判断其用处，因此都是默认返回处理过的数据（根据我的需求）。如果需要未经处理的数据，可以在请求时传入isHandle，值为false

> 例：localhost:8888/api/bili/video/recommend?number=10&isHandle=false  





目前一些API接口是从PC端网页爬取的，对于移动端是否会有什么不同尚不清楚





# 第三方API




## 1.B站视频推荐 

1.1 请求实例：

> /api/bili/video/recommend?number=10&refresh=1

1.2 请求方式：GET

1.3 传入参数说明：

| 参数名  |                      描述                      | 是否必需 |
| :-----: | :--------------------------------------------: | :------: |
| number  |            返回视频数量，默认返回10            |    否    |
| refresh | refresh应该是跟刷新有关的，每次刷新传入的值加1 |    否    |

1.4 返回类型：

```json
[
   "video": {
        "id": "BV1R44y1f7h7",
        "title": "和妹妹一起开飞机喝咖啡 #12自然之旅 我的世界",
        "picture": "http://i1.hdslb.com/bfs/archive/0a8303d4aecaab981b894f48bfe28e929ae46fb9.jpg",
        "url": "https://www.bilibili.com/video/BV1R44y1f7h7",
        "view": 16105,
        "like": 6177,
        "danmaku": 321
	},
"user":{
    "name": "悠然小天",
    "avatar": "https://i2.hdslb.com/bfs/face/14a0990af220f76ff1ee69ad4588df0d26b85291.jpg",
    "space": "https://space.bilibili.com/3746384"
	}
]
```

1.5  返回参数说明

| 参数名  |     描述     |
| :-----: | :----------: |
|   id    |   视频BV号   |
|  title  |   视频标题   |
| picture | 视频封面地址 |
|   url   |   视频地址   |
|  name   |   作者名称   |
| avatar  | 作者头像地址 |
|  space  | 作者空间地址 |







## 2. 网易云音乐搜索

2.1 请求实例：

> /api/wangyi/search?name=周杰伦

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

> /api/bili/search?content=舞蹈区

3.2 请求方式：GET

3.3 传入参数说明

| 参数名  | 类型 |   描述   | 是否必需 |
| :-----: | :--: | :------: | :------: |
| content | STR  | 搜索内容 |    是    |
|   uid   | INT  | 用户UID  |    否    |

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







## 4. 网易云音乐播放链接

4.1 请求实例

> /api/wangyi/music/play?id=1859899373

4.2 请求方法：GET

4.3 传入参数

| 属性名 | 类型 |        描述        | 是否必需 |                值                 |
| :----: | :--: | :----------------: | :------: | :-------------------------------: |
|   id   | INT  |       歌曲ID       |    是    |                                   |
| level  | STR  | 音质(默认standard) |    否    | standard, exhigh, lossless, hires |

4.4 返回参数

```
[
{
  id: 1859899373,
  url:'http://xxxx.mp3',
  size: '2.538 MB',
  md5: '11db1d9a43f8c93def412a19157494fb',
  type: 'mp3',
  time: '2:46'
}
]
```





## 5. 必应每日壁纸

5.1 请求实例

> /api/bing/wallpaper



5.2 请求方法：GET

5.3 传入参数

| 属性名 |                    描述                     | 是否必需 |    值    |
| :----: | :-----------------------------------------: | :------: | :------: |
| format |            返回数据格式，默认js             |    否    | js、xml  |
|  time  | 图片日期，默认返回今天图片；0:今天，1:昨天… |    否    |  0 ~ 7   |
| number |             返回图片数量，默认1             |    否    |  1  ~ 8  |
|  area  |                    地区                     |    否    | zh-CN、… |

5.4 返回参数

```
[
    {
        "data": " ",
        "title": " ",
        "description": " ",
        "descriptionSearch": " ",
        "imgUrl": " "
    }
]
```





## 6. 网易云登录（手机、网易邮箱）

最好不要多次发起同一次请求；

邮箱登录我没有试过，没有网易邮箱，可能有问题

6.1 请求实例

> /api/wangyi/login/phone?account=xxx&password=xxx   (手机登录)
>
> /api/wangyi/login/mailbox?account=xxx&password=xxx	（网易邮箱登录）

6.2 请求方法：GET

6.3 传入参数

|   属性名    |                             描述                             | 是否必需 |  值  |
| :---------: | :----------------------------------------------------------: | :------: | :--: |
|   account   |                      手机号或者邮箱账号                      |    是    |      |
|  password   | 密码（未加密），与md5password任性其一，优先级小于md5password |    是    |      |
| md5password |       md5密码，与password任性其一，优先级大于password        |    是    |      |

6.4 返回参数

返回token，cookie之类的数据（暂时没有经过二次处理）。



## 7. 网易云登录（二维码）

7.1 请求实例

> /api/wangyi/login/qr	生成二维码
>
> /api/wangyi/login/check?key=xxx	检验二维码状态

7.2 请求方法：GET

7.3 传入参数

| 属性名 |      描述       | 是否必需 |                            返回值                            |
| :----: | :-------------: | :------: | :----------------------------------------------------------: |
|  key   | 生成二维码的key |    是    | 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies) |



7.4 返回参数



## 





# 原生功能

没有用到第三方API，有些请求(注册、删除、修改…)需要连接到数据库

## 1. 用户注册

1.1 请求实例

> /user/create

1.2 请求方法：POST

1.3 传入参数

​	  传入json，用户名，账号，密码

```
{
    "name": "张三",
    "account": "12ses",
    "password": "asc"
}
```

1.4 返回参数

​	暂无



## 2. 用户登录

2.1请求实例

> /user/login

2.2 请求方法：POST

2.3 传入参数

```json
{
    "account": "12ses",
    "password": "asc"
}
```

2.4 返回参数

​	暂无，以后可能返回token令牌和一些cookie或者个人数据之类的

# 一些相关的文档

> [Bilibili API 第三方文档](https://qinshixixing.gitbooks.io/bilibiliapi/content/)
>
> [哔哩哔哩-API收集整理](https://github.com/SocialSisterYi/bilibili-API-collect)
>
> [网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
>
> [QQ音乐 NodeJS 版 API](https://jsososo.github.io/QQMusicApi/#/)

