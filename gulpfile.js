/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

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
  require('postcss-media-variables'),
  require('autoprefixer')
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
  gulp.watch(['docs/sass/*.scss','docs/*.html'], gulp.series('styles:docs'));
  gulp.watch('src/*.css', gulp.series('styles:dist', 'styles:docs'));
}));
