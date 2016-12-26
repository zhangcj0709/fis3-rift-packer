# 开发说明：

# 1.安装说明
  - 1.1. 下载 [Node Installer](http://nodejs.org/dist/v0.10.31/x64/node-v0.10.31-x64.msi)，并安装。
  - 1.2. 执行 `npm install` 来安装开发依赖包


# 2.使用说明
  发布是使用pkg命令 (作用同fis3一样，但会使用fis3-rift-packer封装好的配置和插件，可在项目目录下 fis-conf.js 配置参数覆盖默认的配置 )
  - 开发：  `pkg release -cw`
  - 发布测试： `pkg release -c`
  - 发布生产： `pkg release prod -c` 带压缩js、css等
  具体参数详见 http://fis.baidu.com/fis3/docs/beginning/debug.html

# 3.jigglypuff
  使用nodejs搭建的本地调试服务, 配置文件为 jiggly.json
  - 启动命令： jiggly
  - 注： js文件node_modules/jigglypuff/lib/handlebars/render.js中68行前插入代码【name = name.replace(/\\/g, "\/");】修复handlebars.partial的监听bug
