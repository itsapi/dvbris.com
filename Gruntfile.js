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
          'build/js/main.min.js': ['src/js/*js']
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
        dest: 'src/css/main.css'
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
    processhtml: {
      main: {
        expand: true,
        cwd: 'src',
        src: ['**/*.html'],
        dest: 'tmp/'
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
        cwd: 'tmp',
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
        ]
      }
    },
    watch: {
      css: {
        files: ['src/css/*.scss'],
        tasks: ['dev']
      },
      reload: {
        files: ['src/**/*'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask('default', [
    'uglify',
    'sass',
    'autoprefixer:dev',
    'autoprefixer:main',
    'cssmin',
    'processhtml',
    'htmlmin',
    'copy'
  ]);
  grunt.registerTask('dev', [
    'sass',
    'autoprefixer:dev'
  ]);

};
