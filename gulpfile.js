const gulp    = require('gulp');
const postcss = require('gulp-postcss');
const sass    = require('gulp-sass');
const rimraf  = require('rimraf');

/*******************************************************
Build Dist 
********************************************************/ 

const plugins = [
  require('postcss-import'),
  require('postcss-media-variables'),
  require('postcss-custom-properties'),
  require('postcss-media-variables')
]

// Clean up dist directory 
gulp.task('clean', gulp.series(function (cb) {
   rimraf('./dist/', cb);
}));

// Get one .styl file and render
gulp.task('styles:dist', gulp.series('clean', function () {
  return gulp.src('./src/spectrum-css-grid.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist/'));
}));

/*******************************************************
Build Docs 
********************************************************/ 

// Package styles
gulp.task('styles:copy', gulp.series('styles:dist', function (){
  return gulp.src('./dist/spectrum-css-grid.css')
    .pipe(gulp.dest('./docs/'));
}));

// Build docs styles 
gulp.task('styles:docs', gulp.series('styles:copy', function () {
  return gulp.src('docs/sass/*')
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.', 'bower_components'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe(gulp.dest('docs'));
}));

/*******************************************************
Publishing 
********************************************************/ 

gulp.task('build', gulp.series('styles:docs', 'styles:dist'));
gulp.task('default', gulp.series('build'));

/*******************************************************
Development 
********************************************************/ 

gulp.task('watch', gulp.series('build', function () {
  // watch for changes
  gulp.watch('docs/*.*');
  gulp.watch('src/*.css', gulp.series('styles:dist', 'styles:docs'));
}));
