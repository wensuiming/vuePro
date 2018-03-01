const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// 编译less
gulp.task('css', function () {
    gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('ivueui.css'))
        .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
    gulp.src('../src/styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
    gulp.src('../src/styles/common/caomei/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});

// 拷贝草莓图标文件
gulp.task('css', function () {
    gulp.src('../src/styles/common/caomei/*.css')
        .pipe(gulp.dest('../dist/styles'));
});

gulp.task('default', ['css', 'fonts']);
