# mySpace-Services



# 简介

基于KOA框架的个人空间服务器代码

调用的API接口都是自己逆向获取的，因此很多参数不确定有什么用





# 项目运行

配置.env文件

```
APP_PORT=80
```

安装依赖

```js
npm install 
```

本地运行

```
node ./src/main.js
或者
nodemon ./src/main.js
```





# 功能




## 1.获取B站视频推荐的数据 

### 1.1 请求实例：

> http://www.k423.space:80/api/bili?number=2
>
> localhost:80/api/bili?number=2

### 1.2 请求方式：GET

### 1.3 传入参数说明：

| 参数名 | 类型 |     描述     |
| :----: | :--: | :----------: |
| number | INT  | 返回视频数量 |

### 1.4 返回类型：

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

### 1.5  返回参数说明

| 参数名       | 描述         |
| ------------ | ------------ |
| videoId      | 视频BV号     |
| videoTitle   | 视频标题     |
| videoPicture | 视频封面地址 |
| videoUrl     | 视频地址     |
| userName     | 作者名称     |
| userAvatar   | 作者头像地址 |
| userSpace    | 作者空间地址 |



# 一些相关的文档

不一定是否有用

> Bilibili API 第三方文档：https://qinshixixing.gitbooks.io/bilibiliapi/content/
>
> 哔哩哔哩-API收集整理：https://github.com/SocialSisterYi/bilibili-API-collect
>
> 网易云音乐 NodeJS 版 API：https://binaryify.github.io/NeteaseCloudMusicApi/#/

