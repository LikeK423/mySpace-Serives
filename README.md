# mySpace-Services



# 简介

基于KOA框架的个人空间服务器代码

接口数据都是自己手动抓取下来的，因此很多参数不确定有什么用





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

请求实例：

> http://www.k423.space:80/api/bili?number=2
>
> localhost:80/api/bili?number=2

请求方式：GET

参数说明：

| 参数名 | 类型 |     描述     |
| :----: | :--: | :----------: |
| number | INT  | 返回视频数量 |

返回类型：

```
[ {视频信息1} , {视频信息2} , {视频信息3} ......]
```

```json
[
    {
        "videoId": "xxx", // 视频BV号
        "videoTitle": "xxx", // 视频标题
        "videoPicture": "xxx", // 视频封面地址
        "videoUrl": "xxx", //  视频地址
        "userName": "xxx", // 作者名称
        "userAvatar": "xxx", // 作者头像地址
        "userSpace": "xxx" // 作者空间地址
    }
]
```





# 一些相关的第三方文档

不一定是否有用

> Bilibili API 第三方文档：https://qinshixixing.gitbooks.io/bilibiliapi/content/
>
> 哔哩哔哩-API收集整理：https://github.com/SocialSisterYi/bilibili-API-collect
>
> 网易云音乐 NodeJS 版 API：https://binaryify.github.io/NeteaseCloudMusicApi/#/

