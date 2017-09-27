//启动页面对应的模块
var url = window.location.pathname;
if (url.indexOf("?") > -1) {
  url = url.split("?")[0];
}
var moduleId = "" + url.slice(1) + "/view";
try {
  moduleId = document.getElementById("cmd-require").value;
} catch (_error) {
}
console.log("调用模块：" + moduleId);
var module = require(moduleId);

try {
  document.getElementsByName("cmd-require").forEach(function(){
    var moduleName = this.value;
    if (moduleName && moduleName != moduleId) {
      require(moduleName);
      console.log("调用模块：" + moduleName);
    }
  });
} catch (_error) {
}