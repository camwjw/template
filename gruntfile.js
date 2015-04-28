module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

  grunt.initConfig({
    uglify: {
      js: {
        files: {
          'assets/js/script.js': [
              'bower_components/jquery/dist/jquery.js',
              'bower_components/waypoints/lib/noframework.waypoints.js',
              'assets/components/js/*.js'
            ]
        }, //files
        options: {
            preserveComments: true,
            beautify: true
        } //options
      } //js
    }, //uglify

    sass: {
      dist: {
        files: {
          'assets/css/styles.css': 'assets/components/sass/*.sass'
        }, //files
        options: {
          style: 'expanded'
        } // options
      } // dist
    }, // sass

    watch: {
      options: { livereload: true },
      script: {
        files: ['assets/components/js/*.js','bower_components/*.js'],
        tasks: ['uglify']
      }, //script
      sass: {
        files: ['assets/components/sass/*.sass'],
        tasks: ['sass'],
        sourceMap: true
      }, //sass
      html: {
        files: ['*.html']
      }
    },
  });

};