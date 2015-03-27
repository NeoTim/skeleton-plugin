var compilerOptions = require('../babel-options'),
    sourcemaps      = require('gulp-sourcemaps'),
    sequence        = require('run-sequence'),
    plumber  = require('gulp-plumber');
    config   = require('../paths'),
    assign   = Object.assign || require('object.assign'),
    stylus   = require('gulp-stylus'),
    concat   = require('gulp-concat'),
    gulp     = require('gulp'),
    load     = require('lazypipe'),
    to5      = require('gulp-babel'),
    use      = require('../utils.js').use;


gulp.task('stage-system', function () {
  return gulp.src(config.demo.source)
    .pipe(plumber())
    .pipe(changed(config.demo.output, {extension: '.js'}))
    .pipe(sourcemaps.init())
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + config.root }))
    .pipe(gulp.dest(config.demo.output));
});

gulp.task('stage-styl', function(){
    return gulp.src(config.styl.index)
        .pipe(plumber())
        .pipe(stylus())
        .pipe(concat(config.styl.name))
        .pipe(gulp.dest(config.styl.dest));
});

// copies changed html files to the output directory
gulp.task('stage-html', function () {
  return gulp.src(config.demo.html)
    .pipe(changed(config.demo.output, {extension: '.html'}))
    .pipe(gulp.dest(config.demo.output));
});

gulp.task('build-stage', function(callback){
    return sequence(
        'clean-stage'
        , ['stage-system', 'stage-html', 'stage-styl']
        , callback
    );
});

gulp.task('stage' , ['build-stage'])
