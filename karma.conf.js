module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-jquery', 'jasmine', 'effroi'],
    files: [
      // Fixtures
      'test/fixtures/droppr.html',

      // Vendors
      'node_modules/jquery/dist/jquery.min.js',

      // Code selectr
      'src/droppr.js',

      // Spec
      'test/spec.droppr.js'
    ],
    browsers: ['PhantomJS'],

    singleRun: true,
    reporters: ['progress', 'coverage'],
    plugins: [
      'karma-jasmine',
      'karma-effroi',
      'karma-jasmine-jquery',
      'karma-coverage',
      'karma-html2js-preprocessor',
      'karma-phantomjs-launcher'
    ],
    preprocessors: {
      '**/*.html' : ['html2js'],
      '**/*.json' : ['html2js'],
      'src/droppr.js': ['coverage']
    },
    coverageReporter: {
      reporters:[
        {type: 'html', dir:'test/coverage/html/'}
      ]
    }
  });
};