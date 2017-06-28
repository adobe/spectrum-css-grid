var gulp = require('gulp'),
    del = require('rimraf'),
    $ = require('gulp-load-plugins')(),
    sass = require('gulp-sass'),
    pug = require('pug'),
    gulpPug = require('gulp-pug');

pug.filters.code = function( block ) {
    return block
        .replace( /&/g, '&amp;' )
        .replace( /</g, '&lt;' )
        .replace( />/g, '&gt;' )
        .replace( /"/g, '&quot;' );
  };


var rimraf = require('rimraf');
gulp.task('clean', function (cb) {
   rimraf('./dist/', cb);
});

// Get one .styl file and render
gulp.task('styles:dist', ['clean'], function () {
  return gulp.src('./src/spectrum-css-grid.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('pug:docs', function () {
  return gulp.src('./docs/*.pug')
    .pipe(gulpPug({
      // pug: pug,
      pretty: true
    }))
    .pipe(gulp.dest('./docs/'));
});
gulp.task('styles:docs', function () {
  return gulp.src('docs/sass/*')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.', 'bower_components'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('docs'));
});
gulp.task('watch', ['pug:docs', 'styles:docs', 'styles:dist'], function () {
  // watch for changes
  gulp.watch('docs/*.pug', ['pug:docs']);
  gulp.watch('*.scss', ['styles:dist']);
  gulp.watch('bower_components/**/*.scss', ['styles:dist']);
  gulp.watch('docs/sass/*.scss', ['styles:docs']);
  gulp.watch('bower.json', ['wiredep']);
});
gulp.task('default', function () {
  gulp.start('watch');
});
