页面目录：支持html、hbs, js、coffee, css、scss、sass, 分别编译到views, scripts, styles目录下

支持js合并，views目录下js、coffee模块化封装后合并到/scripts/pkg/app.js文件中
页面中可使用注解<!--@require "app/scripts/aio.js"-->直接引入合并的app.js文件

支持css合并，views目录下css、scss、sass合并到/styles/pkg/app.css文件中
页面中可使用注解<!--@require "app/styles/aio.css"-->直接引入合并的app.css文件