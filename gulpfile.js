var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    processhtml = require('gulp-processhtml'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    browserify = require('gulp-browserify');


gulp.task('css', function () {
  return gulp.src('./src/css/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(rename('main.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('js', function () {
  return gulp.src('./src/js/main.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(browserify())
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('html', function () {
  return gulp.src('./src/**/*.html')
    .pipe(processhtml())
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('copy', function () {
  gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./build/fonts/'));
  gulp.src('./src/images/*')
    .pipe(gulp.dest('./build/images/'));
  gulp.src('./src/favicon.ico')
    .pipe(gulp.dest('./build/'));
});

gulp.task('reload', function () {
  setTimeout(function () { livereload.changed('/'); }, 1000);
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./src/css/**/*.scss', ['css']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/**/*', ['copy', 'reload']);
});

gulp.task('default', ['css', 'js', 'html', 'copy']);
