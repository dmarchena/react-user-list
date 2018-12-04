// Karma configuration
// Generated on Sat Oct 17 2015 22:01:45 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'src/**/*.js',
      'test/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['browserify', 'coverage'],
      'src/**/*.jsx': ['browserify', 'coverage'],
      'test/**/*.spec.js': ['browserify']
    },

    browserify: {
      debug: true,
      extensions: ['.js', '.jsx'],
      transform: ['babelify', 'browserify-istanbul']
    },

    watchify: {
      poll: true
    },

    eslint: {
      stopOnError: true,
      stopOnWarning: true
    },

    plugins: [
      'karma-browserify',
      'karma-coverage',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      instrumenters: { 'istanbul-react': require( 'istanbul-react') },
      instrumenter: {
        'src/**/*.{js,jsx}': [ 'istanbul-react' ]
      },
      reporters: [
        { type: 'lcov', dir: 'coverage', subdir: 'coveralls' }
      ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DISABLE, // Disabled because an istanbul html bug: https://github.com/tsargent/styleguide/commit/c5c2f78fa3712ddc0110e20c006c59a5e67d594d


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'PhantomJS' ]


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true

  });
};
