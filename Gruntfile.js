module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["bower_components/bootstrap/less"],
          yuicompress: true
        },
        files: {
          "assets/css/application.min.css": "assets/_less/application.less"
        }
      }
    },
    sass: {
      production: {
        options: {
          paths: ["bower_components/bootstrap/sass"],
          yuicompress: true
        },
        files: {
          "assets/css/application.min.css": "assets/_sass/application.sass"
        }
      }
    },
    uglify: {
      jquery: {
        files: {
          'assets/js/jquery.min.js': 'bower_components/jquery/jquery.js'
        }
      },
      bootstrap: {
        files: {
          'assets/js/bootstrap.min.js': ['bower_components/bootstrap/js/bootstrap-collapse.js',
            'bower_components/bootstrap/js/bootstrap-scrollspy.js',
            'bower_components/bootstrap/js/bootstrap-button.js',
            'bower_components/bootstrap/js/bootstrap-affix.js']
        }
      }
    },
    copy: {
      bootstrap: {
        files: [
          {expand: true, cwd: 'bower_components/bootstrap/img/', src: ['**'], dest: 'assets/img/'}
        ]
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch'
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', [ 'sass', 'uglify', 'copy', 'exec:build' ]);
  grunt.registerTask('build', [ 'sass', 'uglify', 'copy', 'exec:build' ]);
  grunt.registerTask('watch', ['exec:build', 'exec:serve']);
};