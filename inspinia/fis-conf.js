// 配置本地编译产出路径
var localPath = "../biz-cms-controller/src/main/webapp/resources";
fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: localPath
  })
});

// 编译开始
fis.once('release:start', function clearPath(ret) {
  try {
    // 清空发布目录
    fis.util.del(localPath);
  } catch (e) {
    console.warn(e);
  }
});

fis.match("app/scripts/preload.js", {
  isMod: false,
  packTo: false,
  moduleId: ""
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

// copy font-awesome
if (pkg.devDependencies["font-awesome"]) {
  if (!fis.util.exists("app/plugins/font-awesome")) {
    fis.util.copy("node_modules/font-awesome/css", "app/plugins/font-awesome/css");
    fis.util.copy("node_modules/font-awesome/fonts", "app/plugins/font-awesome/fonts");
  }
}


fis.match("app/vendor/popper.{min.js, .js}", {
  packOrder: -8888
});
fis.match("app/vendor/bootbox.js", {
  packOrder: 100
});