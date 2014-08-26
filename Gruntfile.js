module.exports = function (grunt) {

  grunt.initConfig({
    clean: ['./_site'], 
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: 'bower_components/fontawesome/css/font-awesome.css',
            dest: './css',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/jquery/dist/jquery.js', 'bower_components/jquery_dropotron/jquery.dropotron.js', 'bower_components/skeljs/src/skel.js', 'bower_components/skeljs/src/skel-panels.js'],
            dest: './js',
            filter: 'isFile' 
          }
        ]
      }  
    },
    
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml, _config.build.yml'
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '_site'
        },
        src: '.',
        server: true,
        server_port: 4000,
        auto: true
      }
    }
  });


  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'copy:main' ,'jekyll:server']);
};