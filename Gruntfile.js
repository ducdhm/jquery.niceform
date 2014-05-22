module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                preserveComments: 'some'
            },
            main: {
                src: 'jquery.form2.js',
                dest: 'jquery.form2.min.js'
            },
            basicRules: {
                src: 'jquery.form2-basic-rules.js',
                dest: 'jquery.form2-basic-rules.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};