# Vue Init

## 项目配置
### 基础框架构建

*Vue Cli 3.0*： [link](https://cli.vuejs.org) 

*Vue*： [link](https://cn.vuejs.org) 

*vue-router*： [link](https://router.vuejs.org) 

*vuex*：[link](https://vuex.vuejs.org) 

*axios*：  [link](https://github.com/axios/axios)

*vant*： [link](https://github.com/youzan/vant)

*postcss-px-to-viewport*： [link](https://github.com/evrone/postcss-px-to-viewport)

### 项目依赖
*fastclick* [link](https://github.com/ftlabs/fastclick) 

*vconsole*  [link](https://github.com/Tencent/vConsole)

### 项目h5全局样式配置说明
*全局样式采用*： vw vh vmin wmax flex 进行布局 （不采用rem布局）

*详见*  /pubilc/global.scss

## Project setup
```
npm install / yarn install

其中 sass sass-loader 可能需要配置淘宝镜像进行下载
```

### Compiles and hot-reloads for development
```
npm run serve / yarn run serve 
npm run build / yarn run build 
```

### Compiles and minifies for production

```
npm run serve:test / yarn run serve:test  
npm run build:test / yarn run build:test

```

```
npm run build-all   打包所有包
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 文件目录
    |-- .gitignore ---------------- git 忽略文件、文件夹
    |-- babel.config.js
    |-- config.js  ---------------- 项目环境 uat、dev 、test 地址
    |-- package-lock.json ---------------- 项目依赖文件
    |-- package.json ---------------- 项目配置文件
    |-- postcss.config.js ---------------- 全局px 转换 vw配置文件
    |-- README.md ---------------- 项目说明
    |-- vue.config.js ---------------- 运行、打包全局配置
    |-- public ---------------- 静态文件夹
    |   |-- favicon.ico  ---------------- 项目logo
    |   |-- global.scss ---------------- 全局样式
    |   |-- index.html ---------------- 加载页
    |   |-- vconsole.min.js ---------------- vconsole组件压缩js文件
    |-- src ---------------- 项目文件夹
        |-- App.vue ---------------- 
        |-- main.js ---------------- 
        |-- api ---------------- axios接口配置文件
        |   |-- http.js ---------------- axios初始化
        |   |-- index.js ---------------- 全局接口请求 
        |   |-- request.js ---------------- axios请求封装
        |-- assets ---------------- 静态文件（img）
        |   |-- logo.png ---------------- 
        |-- components ----------------  全局公共组件
        |   |-- Header.vue ---------------- 
        |   |-- HelloWorld.vue ---------------- 
        |-- regular ---------------- 全局公共方法
        |   |-- publicMethod.js ---------------- 公共funtion
        |   |-- rule.js ---------------- 公共正则
        |-- router ---------------- 项目路由文件夹
        |   |-- index.js ---------------- 路由配置
        |-- store ---------------- 
        |   |-- index.js ---------------- vuex 项目数据储存
        |-- views ---------------- 项目页面
            |-- home ---------------- new 页面
            |   |-- http.js ---------------- 接口请求
            |   |-- index.vue ---------------- 当前文件主页
            |-- notFound ---------------- 
                |-- index.vue ---------------- 