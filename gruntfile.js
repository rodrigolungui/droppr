module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      main: {
        options: {
          beautify: false
        },
        files: {
          'dist/selectr.min.js': 'src/selectr.js'
        }
      }
    },

    watch: {
      options: {
        interrupt: true,
        spawn: false
      },

      js: {
        files: ['src/selectr.js'],
        tasks: ['uglify']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  
  grunt.registerTask('test', ['karma']);

};
