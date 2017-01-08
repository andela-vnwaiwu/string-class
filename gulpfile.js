require('dotenv').config();

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const build = './public/';

gulp.task('source', () => gulp.src('./src/string.js')
  .pipe(gulp.dest('./public/js'))
  .pipe(plugins.connect.reload()));

gulp.task('serve', ['build', 'watch'], () => {
  plugins.connect.server({
    root: build,
    port: process.env.PORT || 8080,
    livereload: true,
    fallback: `${build}index.html`
  });
});

gulp.task('watch', () => {
  gulp.watch('./src/string.js', ['source']);
});

gulp.task('build', ['source']);

gulp.task('default', ['serve']);