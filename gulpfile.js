const gulp = require('gulp');
const path = require('path');
const $ = require('gulp-load-plugins')();
const sass = require('gulp-sass');
const pug = require('pug');
const gulpPug = require('gulp-pug');
const log = require('fancy-log');
const Balthazar = require('@spectrum/balthazar');
const deleteDirectory = require('del');
const rimraf = require('rimraf');

/*******************************************************
Build Source 
********************************************************/ 

// this is the basis for the rewrite
gulp.task('generate-dna', function(done) {

  const BALTHAZAR_CONFIG = Balthazar.OUTPUT_TYPES.sass;
  const destDir = path.resolve('src', 'spectrum-origins');

  deleteDirectory(destDir)
    .then(() => {
        // the api for convert is destination, type, path-to-json
        log.info('[build:gulp-example] Starting Balthazar.convertVars');
        // default path to json will look for node_modules/@spectrum/spectrum-dna locally
        return Balthazar.convertVars(destDir, BALTHAZAR_CONFIG);
    })
    .then(files => {
      log.info(`[build:gulp-example] Balthazar created ${files.length} files.`);
      done();
    })
    .catch(error => {
      log.warn('[build:gulp-example] Error caught processing with balthazar!');
      log.error(error);
      process.exit(1);
    });

});

/*******************************************************
Build Dist 
********************************************************/ 

// Clean up dist directory 

gulp.task('clean', gulp.series(function (cb) {
   rimraf('./dist/', cb);
}));

// Get one .styl file and render
gulp.task('styles:dist', gulp.series('clean', 'generate-dna', function () {
  return gulp.src(['./src/spectrum-css-grid.scss', './src/spectrum-css-grid-vars.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./dist/'));
}));

/*******************************************************
Build Docs 
********************************************************/ 

// Render Pug
pug.filters.code = function( block ) {
  return block
      .replace( /&/g, '&amp;' )
      .replace( /</g, '&lt;' )
      .replace( />/g, '&gt;' )
      .replace( /"/g, '&quot;' );
};

gulp.task('pug:docs', function () {
  return gulp.src('./docs/*.pug')
    .pipe(gulpPug({
      // pug: pug,
      pretty: true
    }))
    .pipe(gulp.dest('./docs/'));
});

// Package styles
gulp.task('styles:copy', gulp.series('styles:dist', function (){
  return gulp.src('./dist/spectrum-css-grid.css')
    .pipe(gulp.dest('./docs/'));
}));

// Build docs styles 
gulp.task('styles:docs', gulp.series('styles:copy', function () {
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
}));

/*******************************************************
Publishing 
********************************************************/ 

gulp.task('build', gulp.series('pug:docs', 'styles:docs', 'styles:dist'));
gulp.task('default', gulp.series('build'));

/*******************************************************
Development 
********************************************************/ 

gulp.task('watch', gulp.series('build', function () {
  // watch for changes
  gulp.watch('docs/*.pug', gulp.series('pug:docs'));
  gulp.watch('*.scss', gulp.series('styles:dist'));
  gulp.watch('docs/sass/*.scss', gulp.series('styles:docs'));
}));
