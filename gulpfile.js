//'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });

/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing.withFilters(/:/));
gulp.task('default', ['help']);

/**
 * Compile TypeScript
 */
gulp.task('compile', function () {
    
    var tsProject = $.typescript.createProject('tsconfig.json');
    return gulp.src('./src/ts/*.ts')
        .pipe($.sourcemaps.init())
        .pipe($.typescript(tsProject))
        .pipe($.sourcemaps.write('.', {
            includeContent: false,
            sourceRoot:'../ts/'
        }))
        .pipe(gulp.dest('src/js'));
});