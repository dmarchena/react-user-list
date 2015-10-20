import gulp from 'gulp';

import autoprefixer from 'autoprefixer';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import karma from 'karma';
import postcss from 'gulp-postcss';
import postcssImport from 'postcss-import';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import webserver from 'gulp-webserver';
import uglify from 'gulp-uglify';

const config = {
  css_bundle_filename: 'index.css',
  dirs : {
    src: './src',
    dest: './build',
    css_src: './src/css/',
    css_dest: './build/css/',
    js_src: './src/js',
    js_dest: './build/js'
  },
  js_bundle_filename: 'bundle.js'
};

/**
 * Build app
 */
gulp.task('build', ['build-css', 'build-js', 'build-html']);

gulp.task('build-css', () => {
  return gulp.src(`${config.dirs.css_src}/index.css`)
      .pipe(sourcemaps.init())
      .pipe(postcss([ postcssImport(), autoprefixer({ browsers: ['last 2 versions'] }) ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.dirs.css_dest));
});

gulp.task('build-js', () => {
  let b = browserify({
    entries: `${config.dirs.js_src}/index.jsx`,
    extensions: ['.jsx'],
    debug: true,
    transform: [babelify]
  });
  return b.bundle()
    .pipe(source(config.js_bundle_filename))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify()) 
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dirs.js_dest));
});

gulp.task('build-html', () => {
  return gulp.src(`${config.dirs.src}/**/*.html`)
    .pipe(gulp.dest(config.dirs.dest));
});

/**
 * Start dev server
 */
gulp.task('serve', () => {
  gulp.src(config.dirs.dest)
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
});

/**
 * Run test once and exit
 */
gulp.task('test', (done) => {
  new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('watch', function() {
  gulp.watch([`${config.dirs.js_src}/**/*.js`, `${config.dirs.js_src}/**/*.jsx`], ['build-js'])
  gulp.watch('./src/**/*.css', ['build-css'])
});

gulp.task('default', ['serve', 'watch']);