module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-jquery', 'jasmine'],
    files: [
      // Fixtures
      'test/fixtures/selectr.html',

      // Code selectr
      'src/selectr.js',

      // Spec
      'test/spec.selectr.js'
    ],
    browsers: ['PhantomJS'],

    singleRun: true,
    reporters: ['progress', 'coverage'],
    plugins: [
      'karma-jasmine',
      'karma-jasmine-jquery',
      'karma-coverage',
      'karma-html2js-preprocessor',
      'karma-phantomjs-launcher'
    ],
    preprocessors: {
      '**/*.html' : ['html2js'],
      '**/*.json' : ['html2js'],
      'src/selectr.js': ['coverage']
    },
    coverageReporter: {
      reporters:[
        {type: 'html', dir:'test/coverage/html/'}
      ]
    }
  });
};