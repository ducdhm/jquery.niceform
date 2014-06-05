module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                preserveComments: 'some'
            },
            main: {
                src: 'jquery.niceform.js',
                dest: 'jquery.niceform.min.js'
            },
            basicRules: {
                src: 'jquery.niceform-basic-rules.js',
                dest: 'jquery.niceform-basic-rules.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};