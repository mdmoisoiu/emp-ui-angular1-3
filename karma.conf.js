module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js',
      'app/bower_components/jquery/dist/jquery.min.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-touch/angular-touch.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-bootstrap-show-errors/src/showErrors.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/angular-local-storage/dist/angular-local-storage.js',
      'app/bower_components/angular-translate/angular-translate.js',
      'app/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'app/app.js',
      'app/config.js',
      'app/common/**/*.js',
      'app/components/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine',
        'karma-junit-reporter'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
