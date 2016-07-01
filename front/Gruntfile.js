module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            dynamic_mappings: {
                files: [{ 
                    expand: true,    // allow dynamic building
                    flatten: true,   // remove all unnecessary nesting
                    cwd: 'files/scripts/',
                    src: '**/*.js',  // source files mask
                    dest: '../confs/front/js/',    // destination folder
                    ext: '.min.js'   // replace .js to .min.js
                }]
            },
        },
        less: {
            options: {
               paths: ["css"],
               cleancss: true,
               compress: true,
            },
            files: {
               expand: true,
               cwd: 'files/less/themes/',
               src: ['*.less'],
               dest: '../confs/front/css/',
               ext: '.min.css'
            }
        },
        sprite: {
            all: {
               src: 'files/sprites/*.png',
               dest: '../confs/front/sprites/spritesheet.png',
               destCss: '../confs/front/css/sprites.css'
            }
        },
        watch: {
            options: {
               spawn: false,
               livereload: true,
            },
            js: {
               files: ['files/scripts/*.js'],
               tasks: ['uglify']
            },
            css: {
               files: ['files/less/**/*.less'],
               tasks: ['less']
            },
        }

    });

    //Load Tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Tasks
    grunt.registerTask('default', ['uglify', 'less', 'watch']);

    // Build
    grunt.loadNpmTasks('grunt-spritesmith'); // Fazendo sprites 
   
    
    //Watch task
    //grunt.registerTask('w', ['watch']);

};
