//gulp核心
var gulp = require("gulp"),
  //编译less插件
  less = require("gulp-less"),
  //监听异常
  plumber = require("gulp-plumber"),
  //当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
  notify = require("gulp-notify"),
  //css压缩插件
  cssmin = require("gulp-clean-css");

//编译less任务
function lesscss() {
  //console.log("进行less编译");
  //编译less目录下所有less文件，*代表匹配所有以.less结果的文件，**代表包括0个或多个子目录
  return gulp
    .src([
      // "src/assets/less/components/*.less",
      // "src/assets/less/components/**/*.less",
      "src/assets/less/themes/default/index.less"
    ]) //编译符合规则的less文件
    .pipe(
      plumber({
        errorHandler: notify.onError({
          message: "Error: <%= error.toString() %>",
          title: "Error running something"
        })
      })
    ) //防止watch终止
    .pipe(less()) //进行less编译
    .pipe(gulp.dest("dist/css")); //编译之后的css文件输出目录
}

//复制字体文件
function cpFonts() {
  return (
    gulp
      .src(["src/assets/font/**/*.*"])
      // .pipe(sourcemaps.init())//sourcemaps 初始化
      .pipe(cssmin()) //输出的min文件进行压缩  //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
      // .pipe(sourcemaps.write("."))//在当前目录生成map文件
      .pipe(gulp.dest("dist/font")) //压缩之后的css文件输出目录
  );
}
//压缩css任务
function styles() {
  return (
    gulp
      .src(["dist/css/*.css"])
      // .pipe(sourcemaps.init())//sourcemaps 初始化
      .pipe(cssmin()) //输出的min文件进行压缩  //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
      // .pipe(sourcemaps.write("."))//在当前目录生成map文件
      .pipe(gulp.dest("dist/css")) //压缩之后的css文件输出目录
  );
}

// const build = gulp.series(lesscss, styles);

exports.default = gulp.series(lesscss, styles, cpFonts);
