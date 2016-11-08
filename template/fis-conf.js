// 配置本地编译产出路径
var localPath = "build";
fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: localPath
  })
});

// 编译开始时清空发布目录
fis.once('release:start', function clearPath(ret) {
  try {
    fis.util.del(localPath);
  } catch (e) {
  }
});


// copy jquery
var pkg = require("./package.json")
if (pkg.devDependencies.jquery) {
  if (!fis.util.exists("app/vendor/jquery-"+pkg.devDependencies.jquery+".js")) {
    fis.util.copy("node_modules/jquery/dist/jquery.js", "app/vendor/jquery-"+pkg.devDependencies.jquery+".js");
  }
}
fis.match("app/vendor/jquery-"+pkg.devDependencies.jquery+".js", {
  packOrder: -9999
});

// copy handlebars.runtime
if (pkg.devDependencies.handlebars) {
  if (!fis.util.exists("app/vendor/handlebars.runtime-"+pkg.devDependencies.handlebars+".js")) {
    fis.util.copy("node_modules/handlebars/dist/handlebars.runtime.js", "app/vendor/handlebars.runtime-"+pkg.devDependencies.handlebars+".js");
  }
}
