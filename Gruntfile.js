module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      combine: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n\n'
        },
        files: {
          'build/js/main.min.js': ['src/js/*.js', '!src/js/main.min.js']
        }
      }
    },
    autoprefixer: {
      main: {
        expand: true,
        src: 'src/css/*.css'
      }
    },
    cssmin: {
      combine: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
        },
        files: {
          'build/css/main.min.css': ['src/css/*.css', '!src/css/main.min.css']
        }
      }
    },
    htmlmin: {
      main: {
        options: {
          banner: '<!--! <%= pkg.name %> <%= grunt.template.today() %> -->\n',
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true
        },
        expand: true,
        cwd: 'src',
        src: ['**/*.html'],
        dest: 'build/'
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['fonts/*'],
            dest: 'build/'
          },
          {
            expand: true,
            cwd: 'src',
            src: ['images/*'],
            dest: 'build/'
          }
        ],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'copy']);

};