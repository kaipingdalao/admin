# element3-admin

> 这是一个极简的 element3 admin 管理后台模板。它只包含了 Element3 UI

目前版本为 `v4.0+` 基于 `vue-cli` 进行构建


## 相关项目

- [element3-admin-template](https://github.com/hug-sun/element3-admin-template)

- [element3-admin-ts-template](https://github.com/hug-sun/element3-admin-ts-template)

- [element3-admin](https://github.com/hug-sun/element3-admin)

## Build Setup

```bash
# 克隆项目
git clone https://github.com/hug-sun/element3-admin-template.git

# 进入项目目录
cd element3-admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions


## 使用
### 全局使用命令打开admin-cli
进入cli目录 `npm link`
### 安装本地包packages

* 安装rollup
  ```npm i rollup -g```
* 打包
  进入包目录，即packages
  ```rollup -c```
* 安装包
  返回在framework目录
  ```npm link ./packages```
  或 [参考链接](https://blog.csdn.net/cuk0051/article/details/108319482)
  包目录`npm link`
  在`/usr/local/lib/node_modules/`文件夹中创建了一个符号链接，其中包含系统中的全局npm软件包，这些软件包使用`npm -g`安装
  在另一个项目中使用此模块: `npm link package_name`

