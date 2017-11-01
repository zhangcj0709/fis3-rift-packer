/*
** 该文件不会打包至app.js，仅单独使用
** without jquery and other plugins
 */

// check if browser support HTML5 local storage
localStorageSupport = (function()  {
  return (('localStorage' in window) && window['localStorage'] !== null)
})();


Element.prototype.hasClass = function (className) {
  className = className || '';
  if (className.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
  return new RegExp(' ' + className + ' ').test(' ' + this.className + ' ');
};
Element.prototype.addClass = function (className) {
  if (!this.hasClass(className)) {
    this.className = this.className == '' ? className : this.className + ' ' + className;
  }
  return this
};
Element.prototype.removeClass = function (className) {
  if (this.hasClass(className)) {
    var newClass = ' ' + this.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    this.className = newClass.replace(/^\s+|\s+$/g, '');
  }
  return this
};

//主题设置
var body = document.body;
if (localStorageSupport) {
  var skin = localStorage.getItem("skinname");
  var collapse = localStorage.getItem("collapse_menu");
  var fixedsidebar = localStorage.getItem("fixedsidebar");
  var fixednavbar = localStorage.getItem("fixednavbar");
  var fixednavbar2 = localStorage.getItem("fixednavbar2");
  var boxedlayout = localStorage.getItem("boxedlayout");
  var fixedfooter = localStorage.getItem("fixedfooter");

  if (skin) {
    body.addClass(skin);
  }
  if (fixedsidebar == 'on') {
    body.addClass("fixed-sidebar");
    //todo: 左菜单slimScroll， scripts/inspinia.js
  }
  if (collapse == 'on') {
    if (body.hasClass('fixed-sidebar')) {
      if (!body.hasClass('body-small')) {
        body.addClass('mini-navbar');
      }
    } else {
      if (!body.hasClass('body-small')) {
        body.addClass('mini-navbar');
      }
    }
  }
  if (boxedlayout == 'on') {
    body.addClass('boxed-layout');
  }
  //todo: 预置导航栏样式，views/templates/navbar <script>
  //todo: 预置页脚样式，views/templates/footer <script>

} else {
  body.addClass("skin-3");
}

//todo: 菜单激活当前页面对应的链接，scripts/inspinia.js