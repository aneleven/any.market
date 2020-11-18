const gulp = require('gulp'),
      sass = require('gulp-sass'), 
      cleanCSS = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      concatCss = require('gulp-concat-css'),
      browserSync = require('browser-sync').create();

/**
 * Complite SCSS into CSS
 * Minify CSS
 */
function style(){
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(concatCss('style.css'))
    .pipe(cleanCSS({level: 2}))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
}

/**
 * BrowserSync
 */
function watch(){
  browserSync.init({
    proxy: "http://work/Projects/any.market/app"
  });

  gulp.watch("./assets/scss/*.scss", style);
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
