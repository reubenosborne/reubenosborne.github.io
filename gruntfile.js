module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    },
                    files: [{
                        expand: true,
                        cwd: 'images/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'images/build/'
                        }]
                        },
                        dynamic: {
                            files: [{
                                expand: true,
                                cwd: 'src/',
                                src: ['**/*.{png,jpg,gif}'],
                                dest: 'dist/'
                                }]
                            }
                        }
                        });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin']);

};