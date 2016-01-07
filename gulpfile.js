'use strict';

var pkg = require('./package.json');

var gulp = require('gulp');
var header = require('gulp-header');

var sourcemaps = require('gulp-sourcemaps');

var autoprefix = require('autoprefixer');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var csscomb = require('gulp-csscomb');
var cssnano = require('gulp-cssnano');
var csslint = require('gulp-csslint');

var del = require('del');

// generate banner info
var bannerTpl = '/*!\n' +
    ' * CUI v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
    ' * Copyright 2015-<%= new Date().getFullYear() %> <%= pkg.author %>\n' +
    ' * Licensed under <%= pkg.license %> (<%= pkg.licenseUrl %>)\n' +
    ' */\n';
var genBanner = function() {
  return header(bannerTpl, {pkg: pkg});
};


// clean task
gulp.task('dist:clean', function(cb) {
  del(['dist/**']).then(function() {
    cb();
  })
});

// assets build
gulp.task('dist:assets:themes', function() {
  var srcGlob = 'src/themes/**/assets/**/*.*';
  var distPath = 'dist/themes';

  console.log('building assets to dist');

  return gulp.src(srcGlob).pipe(gulp.dest(distPath));
});

// css build
var compileStylusToCss = function(srcGlob, distPath) {
  var compileOptions = {};

  return gulp.src(srcGlob).pipe(genBanner()).pipe(stylus(compileOptions)).pipe(gulp.dest(distPath));
};

gulp.task('dist:css:components', function() {
  var srcGlob = ['src/definitions/**/*.styl', '!src/definitions/mixins/*.styl'];
  var distPath = 'dist/components';

  return compileStylusToCss(srcGlob, distPath);
});

gulp.task('dist:css:cui', function() {
  var srcGlob = 'src/cui.styl';
  var distPath = 'dist';

  return compileStylusToCss(srcGlob, distPath);
});

gulp.task('dist:css:autoprefix', function() {
  var srcGlob = 'dist/**/*.css';
  var distPath = 'dist';

  return gulp.src(srcGlob).pipe(postcss([autoprefix('not ie < 8')])).pipe(gulp.dest(distPath));

});

gulp.task('dist:css:comb', function() {
  var srcGlob = 'dist/**/*.css';
  var distPath = 'dist';
  var confPath = 'src/.csscomb.json';

  return gulp.src(srcGlob).pipe(csscomb(confPath)).pipe(gulp.dest(distPath));
});

gulp.task('dist:css:minify',function() {
  var srcGlob = ['dist/**/*.css', '!dist/**/*.min.css'];
  var distPath = 'dist';
  var miniConfig = {
    keepBreaks: true,
    aggressiveMerging: false,
    compatibility: 'ie8'   // check this out: https://github.com/jakubpawlowicz/clean-css/blob/master/lib/utils/compatibility.js
  };

  return gulp.src(srcGlob)
            .pipe(genBanner())
            .pipe(sourcemaps.init())
            .pipe(cssnano())
            .pipe(sourcemaps.write('.'))
            .pipe(rename({suffix: ".min"}))
            .pipe(gulp.dest(distPath));
});

gulp.task('dist:css:lint', function() {
  var srcGlb = ['dist/**/*.css'];

  return gulp.src(srcGlb).pipe(csslint('src/.csslintrc')).pipe(csslint.reporter());
});

gulp.task('dist:css',['dist:css:components', 'dist:css:cui', 'dist:css:autoprefix', 'dist:css:comb', 'dist:css:lint'], function(cb) {
  console.log('dist:css successfully!');
  cb();
});

gulp.task('dist:css', function(cb) {
  runSequence('dist:css:components', 'dist:css:cui', 'dist:css:autoprefix', 'dist:css:comb', 'dist:css:lint', 'dist:css:minify', cb);
});

gulp.task('build:dist', function(cb) {
  runSequence('dist:clean', ['dist:assets:themes', 'dist:css'], cb);
});


