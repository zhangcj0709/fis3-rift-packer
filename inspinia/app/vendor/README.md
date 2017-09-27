公共组件目录：支持js、coffee, css、scss、sass
（建议放jquery等常用的公共组件, 带字体组件请放到plugins目录）

js，coffee会编译到scripts目录下， css, sass编译到styles目录下

支持js合并，scripts，views目录下js、coffee模块化封装后合并到/scripts/pkg/vendor.js文件中
页面中可使用注解<!--@require "app/vendor/aio.js"-->直接引入合并的vendor.js文件

支持css合并，styles,views目录下css、scss、sass合并到/styles/pkg/vendor.css文件中
页面中可使用注解<!--@require "app/vendor/aio.css"-->直接引入合并的vendor.css文件

aio.js, aio.css文件仅供引用