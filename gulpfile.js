const gulp = require('gulp');
const sourceMaps = require('gulp-sourcemaps');


// Build JS
// ---------------------------------------------------------------
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
gulp.task('build-js-dev',
    () => gulp
        .src([
            './src/**/*.es'
        ])
        .pipe(babel())
        .pipe(gulp.dest('./public/js/'))
);

gulp.task('build-js-prod',
    () => gulp
        .src([
            './src/**/*.es'
        ])
        .pipe(babel())
        .pipe(replace(/\\n\s+/g, ' '))
        .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('./dist/'))
);


// Watch
// ---------------------------------------------------------------
gulp.task('watch', gulp.parallel(
    () => gulp.watch(
        ['./src/**/*.es'],
        gulp.series('build-js-dev')
    )
));


// Main tasks
// ---------------------------------------------------------------
gulp.task('dev', gulp.series(
    'build-js-dev',
    'watch'
));

gulp.task('build', gulp.series(
    'build-js-prod'
));
