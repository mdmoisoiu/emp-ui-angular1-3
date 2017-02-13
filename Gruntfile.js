'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');


  // configurable paths
  var yeomanConfig = {
    app: 'app'
  };

  var codeFiles = [
      '<%= yeoman.app %>/app.js',
      '<%= yeoman.app %>/config.js',
      '<%= yeoman.app %>/common/**/*.js',
      '<%= yeoman.app %>/components/**/*.js'
  ];

  grunt.initConfig({
    yeoman: yeomanConfig,
	
	jshint: {
      options: {
        jshintrc: '.jshintrc',
          reporterOutput: ""
      },
      all: codeFiles,
      ignore: [
          '<%= yeoman.app %>/**/*_test.js'
      ]
    },
	concat: {
      dist: {
        files: {
			'<%= yeoman.app %>/compiled.js': codeFiles.concat('!<%= yeoman.app %>/**/*_test.js')
        }
      }
    },
    watch: {
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass']
      },
      livereload: {
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/styles/{,*/}*.css',
          '<%= yeoman.app %>/**/*.js'
        ],
        tasks: ['concat']
      }
    },
    connect: {
        server: {
            options: {
                port: 9001,
                hostname: 'localhost',
                base: 'app'
            }
        }
    },
    open: {
      server: {
            url: 'http://localhost/EmployeeDirectory/angular/app/index.html',
            app: 'Chrome'
      }
    },
    karma: {
      unit: {
          configFile: 'karma.conf.js',
          singleRun: true
      }
    },
    protractor_webdriver: {
      start: {
          options: {
              path: './node_modules/protractor/bin/',
              command: 'webdriver-manager start'
          }
      }
    },
    protractor: {
      options: {
          configFile: "e2e-tests/protractor.conf.js", // Default config file
          keepAlive: true, // If false, the grunt process stops when the test fails.
          noColor: false, // If true, protractor will not use colors in its output.
          args: {
              // Arguments passed to the command
          }
      },
      all: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
          options: {
              args: {} // Target-specific arguments
          }
      }
    }
});

  grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', [
        'jshint',
        'concat',
        /* 'connect:server', */
        /* 'open', */
        'watch'
    ]);

    grunt.registerTask('e2e',
        ['protractor_webdriver:start', 'protractor:all']);

    grunt.registerTask('test',
        ['karma:unit', 'e2e']);

};