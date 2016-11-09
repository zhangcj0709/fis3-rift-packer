页面目录：支持html、hbs, js、coffee, css、scss、sass, 分别编译到views, scripts, styles目录下

支持js合并，views目录下js、coffee模块化封装后合并到/scripts/pkg/app.js文件中
页面中可使用注解<!--@require "app/scripts/aio.js"-->直接引入合并的app.js文件

支持css合并，views目录下css、scss、sass合并到/styles/pkg/app.css文件中
页面中可使用注解<!--@require "app/styles/aio.css"-->直接引入合并的app.css文件


支持预编译handlebars模板文件, views目录下所有templates子目录中.hbs模板文件预编译成app/scripts/templates.js，以下划线_开始命名的文件编译成partial
js引入templates.js（若已经引入app.js， js中直接使用require("templates")即可）后可，使用Handlebars.templates[模板名称], Handlebars.partial[模板名称] 来获取模板
