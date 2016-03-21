module.exports = function(grunt) {

	grunt.initConfig({

		uglify: {
			my_target: {
				files: {
					'_/js/app.min.js': ['_/components/js/*.js']
				} //files
			} //my_target
		}, //uglify

		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass + sass

		watch: {
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			}, //scripts
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			} //sass
		}, //watch

		browserSync: {
			bsFiles: {
				src: [
					'_/js/*.js',
					'_/components/js/components/main/*.js',
					'_/css/*.css',
					'./*.html'
				]
			},
			options: {
				watchTask: true,
				server: {
					baseDir: './'
				}
			}
		} //browser-sync

	}) //initConfig

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-compass')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-browser-sync')

	// define default task
    grunt.registerTask('default', ['browserSync', 'watch'])

} // exports