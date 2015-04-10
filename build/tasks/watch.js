var gulp  = require('gulp');
var paths = require('../paths');

gulp.task('watch', function(){

    gulp.watch(paths.html, ['build-html-system']);
    gulp.watch(paths.source, ['build-system']);

});
