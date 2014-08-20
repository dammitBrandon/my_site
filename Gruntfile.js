module.exports = function (grunt) {

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    meta: {
      scripts: [
        'js/**/*.js'
      ],
      styles: [
        'sass/**/*.scss',
        'css/**/*.css'
      ]
    },

    // Combine JS modules using Browserify
    browserify: {
      options: {
        // Shim 3rd party libraries
        shim: {
//          'bootstrap': {path: 'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap.js', exports: 'bootstrap'},
          'jquery': {path: 'bower_components/jquery/dist/jquery.js', exports: '$'},
          'dropotron': {path: 'js/jquery_dropotron/jquery.dropotron.js', exports: 'dropotron'},
//          'fastclick': {path: 'bower_components/fastclick/lib/fastclick.js', exports: 'jQuery'},
//          'jquery-jail': {path: 'bower_components/JAIL/src/jail.js', exports: 'jail'},
          'skeljs': {path: 'bower_components/skeljs/src/skel.js', exports: 'skel'},
  
          'skelpanelsjs': {path: 'bower_components/skeljs/src/skel.js', exports: 'skelpanels'}
//
        }
      },
      debug: {
        src: ['js/**/*.js'],
        dest: 'debug/app.js',
        options: {
          debug: true
        }
      },
      build: {
        src: ['app/main.js'],
        dest: 'build/app.js'
      }
    },

//    Compile Sass files to CSS
    compass: {
      options: {
        sassDir: 'sass'
      },
      debug: {
        options: {
          cssDir: 'debug',
//          for source maps
          debugInfo: true,
          outputStyle: 'expanded'
        }
      },
      build: {
        options: {
          cssDir: 'build'
        }
      }
    },

//    Concatenate files
    concat: {
      debug: {
        files: {
          'debug/style.css': ['css/style.css'],
          'debug/style-1000px.css': ['css/style-1000px.css'],
          'debug/style-desktop.css': ['css/style-desktop.css'],
          'debug/style-mobile.css': ['css/style-mobile.css'],
          'debug/syntax.css': ['css/syntax.css'],
          'debug/skel-noscript.css': ['css/skel-noscript.css'],
          'debug/font-awesome.css': ['bower_components/fontawesome/css/font-awesome.css']
        }
      },
      build: {
        files: {
          'build/style.css': ['build/main.css', 'css/main.css', 'css/style.css']
        }
      }
    },

//    Minify CSS files
    cssmin: {
      build: {
        files: {
          'build/style.min.css': ['build/style.css']
        }
      }
    },

//    Minify JS files
    uglify: {
      build: {
        files: {
          'build/app.min.js': ['build/app.js']
        }
      }
    },

    watch: {
      scripts: {
        files: ['<%= meta.scripts %>'],
        tasks: ['browserify2:debug']
      },
      style: {
        files: ['<%= meta.styles %>'],
        tasks: ['compass:debug', 'concat:debug']
      }
    },

//    Clean target directories
    clean: {
      debug: ['debug'],
      buildTemp: [
        'build/main.css',
        'build/style.css',
        'build/app.js'
      ],
      all: ['debug', 'build']
    },

//    Run Jekyll commmands
    jekyll: {
      server: {
        options: {
          serve: true,
//          Ad the --watch flag i.e. rebuild on file changes
          watch: true
        }
      },
//      debug: {
//        src: 'debug',
//        dest: './_site/debug/'
//      },
      build: {
        options: {
          serve: false
        }
      }
    }

  });

//  Compile JS & CSS, run Jekyll build for production
  grunt.registerTask('debug', function () {
    // Rebuild './debug'
    grunt.task.run([
      'clean:debug',
      'compass:debug',
      'browserify:debug',
      'concat:debug'
    ]);
//    grunt.task.run('jekyll:debug');
    // Watch for changes
    grunt.task.run('watch');
  });

  // Alias to `grunt jekyll:server`
  grunt.registerTask('server', 'jekyll:server');

  // Run Jekyll build with environment set to production
  grunt.registerTask('jekyll-production', function () {
    grunt.log.writeln('Setting environment variable JEKYLL_ENV=production');
    process.env.JEKYLL_ENV = 'production';
    grunt.task.run('jekyll:build');
  });

  // Compile and minify JS & CSS, run Jekyll build for production 
  grunt.registerTask('build', [
    'clean:all',
    'compass:build',
    'concat:build',
    'cssmin',
    'uglify',
    'clean:buildTemp',
    'jekyll-production'
  ]);

  grunt.registerTask('default', ['debug']);

};