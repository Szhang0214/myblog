var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');

//定义一个less2css任务（自定义任务名称）
gulp.task('less2css', function () {
    gulp.src('less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('css')); //将会在src/css下生成index.css
});

gulp.task('default',['less2css']); //定义默认任务