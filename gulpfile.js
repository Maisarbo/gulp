const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// Importação dinâmica do gulp-image
async function getImage() {
  const image = await import('gulp-image');
  return image.default;
}

function tarefasCSS(cb) {
  return gulp.src('./vendor/**/*.css')
    .pipe(concat('libs.css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'));
}

function tarefasJS() {
  return gulp.src('./vendor/**/*.js')
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/js'));
}

function tarefasImagem() {
  return getImage().then(image => {
    return gulp.src('./src/images/*')
      .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true
      }))
      .pipe(gulp.dest('./dist/images'));
  });
}

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
exports.images = tarefasImagem;
