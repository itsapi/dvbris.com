module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      combine: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n\n'
        },
        files: {
          'js/dist/main.min.js': ['js/src/*.js']
        }
      }
    },
    cssmin: {
      combine: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'css/dist/main.min.css': ['css/src/*.css']
        }
      }
    },
    htmlmin: {
      dev: {
        options: {
          banner: '<!--! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> -->\n',
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true
        },
        files: {
          'index.html': 'index.dev.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);

};