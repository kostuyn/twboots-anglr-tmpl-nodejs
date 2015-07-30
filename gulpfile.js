var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var newer = require('gulp-newer');
var Config = require('./gulpfile.config');

var config = new Config();

gulp.task('libs', function () {
    return gulp.src(config.moduleLibs)
        .pipe(newer(config.outputJs + config.allLibs))
        .pipe(concat(config.allLibs))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outputJs));
});

gulp.task('app', function () {
    return gulp.src(config.appSources)
        //.pipe(newer(config.outputJs + config.allApp))
        .pipe(concat(config.allApp))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outputJs));
});

gulp.task('libStyles', function () {
    return gulp.src(config.moduleStyles)
        .pipe(newer(config.outputCss + config.allStyles))
        .pipe(concat(config.allStyles))
        .pipe(sourcemaps.init())
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outputCss));
});

gulp.task('styles', function () {
    return gulp.src(config.sourceCss)
        .pipe(newer(config.outputCss + config.allAppCss))
        .pipe(concat(config.allAppCss))
        .pipe(sourcemaps.init())
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outputCss));
});

gulp.task('bootstrap fonts', function () {
    return gulp.src([config.bootstrapFonts])
        .pipe(newer(config.outputFonts))
        .pipe(gulp.dest(config.outputFonts));
});

gulp.task('default', ['libs', 'app', 'styles', 'libStyles', 'bootstrap fonts']);