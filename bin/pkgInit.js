#!/usr/bin/env node

var fis = require("fis3"),
  path = require("path");

process.stdin.setEncoding('utf8');
process.stdout.write('请输入项目名称: ');
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk) {
    var name = chunk ? chunk.trim() : null;
    if (name) {
      var dirPath = path.join(process.cwd(), `./${name}`);
      if( fis.util.exists(dirPath)) {
        process.stdout.write('文件夹已存在，请重现输入: ');
      }
      else{
        // 复制目录
        fis.util.copy(path.join(__dirname, '../template'), dirPath);
        process.stdout.write('创建成功！ ');
        process.exit();
      }
    } else {
      process.stdout.write('请输入项目名称: ');
    }
  }
});