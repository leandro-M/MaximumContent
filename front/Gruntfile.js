module.exports = function(grunt) {

   grunt.initConfig({
      clean: {
         temp: ['../confs/front/css/libs.css','../confs/front/js/libs.js'],
         all: []
      },
      stylus: {
         options: {
            use: [
               require('jeet'),
               require('rupture'),
               function() { return require('autoprefixer-stylus')({browsers: ["> 0%"]}); }
            ],
            paths: [
               './node_modules/rupture',
               './node_modules/jeet/stylus',
            ],
         },
         files: {
            src : 'files/stylesheet/*.styl',
            dest : '../confs/front/css/main.min.css',
         }
      },
      uglify: {
         my_target: {
            files: {
               '../confs/front/js/libs.min.js': ['../confs/front/js/libs.js'],
            }
         }
      },
      cssmin: {
         options: {
            shorthandCompacting: false,
            roundingPrecision: -1
         },
         target: {
            files: {
               '../confs/front/css/libs.min.css' : ['../confs/front/css/libs.css']
            }
         }
      },
      watch: {
         css: {
            files: 'files/stylesheet/**/*.styl',
            tasks: ['stylus'],
            options: {
               livereload: true,
            },
         },
         js: {
            files: ['files/scripts/*.js'],
            files: ['files/scripts/**/*.js'],
            tasks: ['uglify']
         },
      },
   });

   grunt.loadNpmTasks('grunt-contrib-stylus');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['uglify', 'stylus', 'clean', 'watch']);
};
