import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import karma from 'karma';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import webserver from 'gulp-webserver';
import uglify from 'gulp-uglify';

const config = {
  dirs : {
    src: './src',
    dest: './build',
    js_src: './src/js',
    js_dest: './build/js'
  },
  js_bundle_filename: 'bundle.js'
};

/**
 * Build app
 */
gulp.task('build', () => {
  browserify({
    entries: `${config.dirs.js_src}/index.jsx`,
    extensions: ['.jsx'],
    debug: true,
    transform: [babelify]
  })//.transform(babelify)
    .bundle()
    .pipe(source(config.js_bundle_filename))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify()) 
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dirs.js_dest));

  gulp.src(`${config.dirs.src}/**/*.html`)
    .pipe(gulp.dest(config.dirs.dest));
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

/**
 * Start dev server
 */
gulp.task('serve', () => {
  gulp.src(config.dirs.dest)
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html'
    }))
});

gulp.task('default', ['serve']);