# 1

## 开发准备

### 描述项目

项目是个前后台分离的后台管理的SPA,包括前端pc应用和后端应用

功能报错 用户管理 商品分类管理 商品管理 权限管理等功能模块

前端 React全家桶 +Antd es6 Axios  webpack等技术

后代node express  mongodb 等技术

采用 模块化 组件化 工程化的模式开发

### 技术选项

前后台数据交互

+ react 
+ react-router-dom
+ antd
+ redux

前后台交互

+ Ajax请求  axios  jsonp  promise  async  await
+ 测试接口 postman

模块化 

+ es6
+ commonjs

项目构建

+ webpack
+ create-react-app
+ eslint



###Api接口/接口文档/测试接口

## 能学到什么

熟悉项目开发流程 学会模块化 组件化 工程化的开发模式

掌握create-react-app 脚手架创建

使用node+exporss+moongoose +mongobd 搭建后台应用

1) 掌握使用 react-router-dom 开发单页应用

 2) 学会使用 redux+react-redux+redux-thunk 管理应用组件状态 

3) 掌握使用 axios/jsonp 与后端进行数据交互 

4) 掌握使用 antd 组件库构建界面 

5) 学会使用 echarts/bizcharts 实现数据可视化展现 

6) 学会使用 react-draft-wysiwyg 实现富文本编辑器

## 启动项目开发

1. npm start 启动  脚手架创建

2. npm run build  serve build  打包运行

## git管理项目

1. 创建远程仓库
2. 创建本地仓库
   1. 配置gitignore
   2. git init
   3. git add .
   4. git commit -m "初始化"
3. 将本地仓库推送到远程仓库
   1. git remote add origin url
   2. git push origin master
4. 在本地创建dev分支推送到远程
   1. git checkout -b dev
   2. git push origin dev
5. 如果本地有修改
   1. git add .
   2. git commit -m "xxx"
   3. git push origin dev
6. 新的同事,克隆仓库
   1. git clone url
   2. git checkout -b dev origin/dev
   3. git pull origin dev
7. 如果远程修改
   1. git pull origin dev

## 创建项目的基本结构

+ api  ajax请求的模块
+ components  非路由组件
+ pages 路由组件
+ app.js  应用的根组件
+ index.js 入口js

## 引入antd

下载antd包 下载图标包

下载工具包按照官网配置按需引入

自定义主题 设置配置文件

使用antd组件根据antd 文档编写

## 引入路由

`react-router-dom`

拆分应用路由

Login 登入

admin 后台管理

注册路由<BrowserRouter> <Switch> <Route path="" component={}>

## login静态组件

自定义部分样式布局

使用andt组件实现登入表单界面

## 使用表单验证

form对象如何获取对象

操控表单数据 