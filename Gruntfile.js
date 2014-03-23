module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // JS
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

    // CSS
    sass: {
      main: {
        src: 'src/css/main.scss',
        dest: 'tmp/main.css'
      }
    },
    autoprefixer: {
      main: {
        src: 'tmp/main.css',
        dest: 'tmp/main.css'
      },
      dev: {
        src: 'tmp/main.css',
        dest: 'src/css/main.min.css'
      }
    },
    cssmin: {
      main: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
        },
        src: 'tmp/main.css',
        dest: 'build/css/main.min.css'
      }
    },

    // HTML
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

    // Other
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

  grunt.registerTask('default', ['uglify', 'sass', 'autoprefixer:main', 'cssmin', 'htmlmin', 'copy']);
  grunt.registerTask('dev', ['sass', 'autoprefixer:dev']);

};