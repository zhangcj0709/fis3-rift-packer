var fis = module.exports = require('fis3');
fis.require.prefixes.unshift('fis3-rift-packer');
fis.cli.name = 'fis3-rift-packer';
fis.cli.info = require('./package.json');
// 排除项目文件
fis.set('project.ignore', ['fis-conf.js', 'node_modules/**', 'output/**', 'public/**', '*.bak']); // set project.ignore 为覆盖不是叠加
fis.set('project.fileType.text', 'coffee, scss, hbs'); //追加文本文件后缀列表


// 设置发布目录
fis.match('*', {
    deploy: fis.plugin('local-deliver', {
      to: './public'
    }),
    release: false //默认设置所有文件不发布
});
fis.match('resourceMap.json', {
    release: '/$0'
})

// 插件完整发布到plugins目录
fis.match('/app/plugins/(**)', {
    release: '/plugins/$1'
});

// js发布到scripts 目录
fis.match('/app/{scripts,views,vendor}/({*,**/*}.{js,coffee})', {
    release: '/scripts/$1$2$3$4'
});

// css发布到styles目录
fis.match('/app/{styles,views,vendor}/({[a-z]*,**/[a-z]*}.{css,scss,sass})', {
    release: '/styles/$1$2$3$4'
});

// 页面发布到views目录
fis.match('/app/views/({*,**/*}.{html,hbs})', {
    useMap: true,
    release: '/views/$1$2$3$4',
    isHtmlLike: true
});

// 图片发布到images目录
fis.match('/app/images/({*,**/*}.{png,gif,jpg,jpeg})', {
    release: '/images/$1$2$3$4$5$6$7$8'
})

// js和css的合并文件发布到对应pkg目录
fis.match('/{scripts,styles}/pkg/**', {
    release: '/$0'
});


/** START: 合并js*/
//启用模块化插件
// npm install [-g] fis3-hook-cmd
fis.hook('cmd', {
    baseUrl: '/scripts/',
});

fis.match('/app/{scripts,views}/({*,**/*}).{js,coffee}', {
    isMod: true, //模块化
    packTo: '/scripts/pkg/app.js', //合并到app.js
    moduleId: '$1$2'
});

fis.match('/app/scripts/sea.js', {
    isMod: false,
    packOrder: -9999 //require.js合并到app.js开始处
});

fis.match('/app/vendor/{*,**/*}.{js,coffee}', {
    packTo: '/scripts/pkg/vendor.js', //合并到vendor.js
});

fis.match('/app/vendor/jquery-1.11.3.min.js', {
    packOrder: -9999 //jquery.js合并到vendor.js开始处
});
/** END: 合并js*/


/** START: 合并css*/
fis.match('/app/{styles,views}/{[a-z]*,**/[a-z]*}.{css,scss,sass}', {
    packTo: '/styles/pkg/app.css'
});

fis.match('/app/vendor/{[a-z]*,**/[a-z]*}.{css,scss,sass}', {
    packTo: '/styles/pkg/vendor.css', //合并到vendor.css
});
/** END: 合并css*/

// 启用 parser 插件编译coffee script
// npm install -g fis-parser-coffee-script
fis.match('*.coffee', {
    //编译coffee
    rExt: '.js', 
    parser: fis.plugin('coffee-script')
});

// 启用 parser 插件编译sass
fis.config.set('settings.parser.sass', {
    include_paths: ["/app/styles"] // 加入文件查找目录 
});
//npm install -g fis-parser-sass
fis.match('*.scss', {
    rExt: '.css',
    parser: fis.plugin('sass')
});


//启用 lint 插件进行代码检查
/*fis.match('*.js', {
    lint: fis.plugin('js')
});
*/
// 所有文件下面当内嵌 scss 内容时。
// 注意这里的 :scss 也是一种类 css 选择器。表示当目标文件内嵌了其他语言内容时，用来命中内嵌内容为 scss 的编译处理。
fis.match('*:scss', {
    parser: fis.plugin('sass')
});

// 当文件中，内嵌 coffee script 时，使用 coffee-script 进行内容 parse.
fis.match('*:coffee', {
    parser: fis.plugin('coffee-script')
});


fis.on('compile:start', function(file) {
  console.log('%s', file.subpath);
});

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader')
});




// fis3 release prod 产品发布，压缩js、css
fis.media('prod')
    .match('*.{js,coffee,css,scss}', {
        useHash: true
    })
    .match('*.{js,coffee}', {
        // 通过 uglify 压缩 js
        // npm install -g fis-optimizer-uglify-js
        optimizer: fis.plugin('uglify-js')
    })
    .match('*.{css,scss}', {
        // npm install -g fis-optimizer-clean-css
        optimizer: fis.plugin('clean-css', {
        // option of clean-css
        })
    })
