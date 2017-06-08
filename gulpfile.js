// Taken from:
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './',

            // Fix found here: https://browsersync.io/docs/options#option-server
            index: 'hyperloop-chatapp.html'
        }
    });

    gulp.watch(
        ['*.html'], {cwd: 'app'},
        reload);
});
