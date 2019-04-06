const gulp = require('gulp');
const packageJson = require('./package.json');
const sourceMaps = require('gulp-sourcemaps');


// Build JS
// ---------------------------------------------------------------
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const header = require('gulp-header');
const rename = require('gulp-rename');

gulp.task('build-js-dev',
    () => gulp
        .src([
            './src/utils/emulateFormData.es',
            './src/utils/serializeWithFiles.es',
            './src/utils/shouldBeCheck.es',
            
            './src/validate/isNumber.es',
            './src/validate/isTime.es',
            './src/validate/isValidEmail.es',
            './src/validate/isValidEmail.es',
            './src/validate/isValidUrl.es',
            './src/validate/testRegex.es',
            './src/validate/validatePassword.es',
            
            './src/form/clearValue.es',
            './src/form/disableForm.es',
            './src/form/doPostForm.es',
            './src/form/enableForm.es',
            './src/form/hideError.es',
            './src/form/processResponse.es',
            './src/form/resetForm.es',
            './src/form/showError.es',
            './src/form/validateForm.es',
            
            './src/rules/checkDateTime.es',
            './src/rules/checkEmail.es',
            './src/rules/checkNumber.es',
            './src/rules/checkPassword.es',
            './src/rules/checkPasswordConfirm.es',
            './src/rules/checkRegex.es',
            './src/rules/checkRequired.es',
            './src/rules/checkUrl.es',
            
            './src/defaults.es',
            './src/niceform.es',
            './src/jquery.niceform.es'
        ])
        .pipe(babel())
        .pipe(replace('@{version}', packageJson.version))
        .pipe(concat('jquery.niceform.js'))
        .pipe(gulp.dest('./dist/'))
);
gulp.task('build-js-prod',
    () => gulp
        .src('./dist/jquery.niceform.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(replace(/\\n\s+/g, ' '))
        .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(sourceMaps.write('.'))
        .pipe(
            header(`/*! NiceForm v${packageJson.version} | Copyright (c) 2014-present Duc Doan (ducdhm@gmail.com) */\n`)
        )
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
    'build-js-dev',
    'build-js-prod'
));
