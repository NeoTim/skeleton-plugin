var vinylPaths = require('vinyl-paths'),
    gulp       = require('gulp'),
    paths      = require('../paths'),
    del        = require('del'),
    load       = require('lazypipe');
    use        = require('../utils').use;

function destroy() {
    return load()
        .pipe(use(vinylPaths, del))
}

function clean(src, stream) {
    return function(){
        return gulp.src(src).pipe(destroy()())
    }
}

gulp.task('clean-stage'  , clean([paths.stage.dest]))
gulp.task('clean-release', clean([paths.release.dest]))
gulp.task('clean'        , clean([paths.output]))


