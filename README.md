# 开发说明：
  所有源文件都在目录./app下
-      /app
       ├── images
       │     └── logo.{png……}
       ├── plugins
       │     │── js
       │     │── css
       │     └── font
       ├── scripts
       │     └── app.{js,coffee}
       ├── styles
       │     └── app.{css,scss}
       ├── vendor
       │     │── jquery.{js,coffee}
       │     └── animate.{css,scss}
       └── views
               └── index.{html,hbs}


# 使用fis3打包项目
  因使用的插件较多，为方便管理，已经包装成fis3-rift-packer包并发布到 https://www.npmjs.com/package/fis3-rift-packer

  发布是使用pkg命令 (作用同fis3一样，但会使用fis3-rift-packer封装好的配置和插件，可在项目目录下 fis-conf.js 配置参数覆盖默认的配置 )
  - 开发：  `pkg release -w`
  - 发布测试： `pkg release`
  - 发布生产： `pkg release prod` 带压缩js、css等
  具体参数详见 http://fis.baidu.com/fis3/docs/beginning/debug.html


# 安装fis3-rift-packer
  - 下载 [Node Installer](http://nodejs.org/dist/v0.10.31/x64/node-v0.10.31-x64.msi)，并安装。
  - 执行  `npm install fis3-rift-packer -g` 来安装 fis3-rift-packer
  - 更新请使用一下命令 `npm update fis3-rift-packer -g`


#注意事项
  - 在MAC上，有可能报错：`env: node\r: No such file or directory`
  - 原因是doc的换行和mac的不一样导致，`brew install dos2unix` ，然后执行 `sudo dos2unix /usr/local/lib/node_modules/fis3-rift-packer/bin/pkg.js` 即可
