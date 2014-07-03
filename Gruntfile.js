
module.exports = function (grunt) {

    // so we don't have to load each 
    // grunt task separately
    require('load-grunt-tasks')(grunt);
     
    grunt.initConfig({
    
        copy: {
            mm: {
                src: 'units/MM/**/*',
                dest: 'build/',
                flatten: true,
                expand: true,
                filter: 'isFile'
            }
        },

        clean : {
            build: ['build']
        }
    });


    grunt.registerTask('default', ['clean', 'copy']);
}
