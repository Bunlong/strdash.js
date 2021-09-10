module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			options: {
				compress: {
					global_defs: {
						'STR_DASH_FORMAT_BROWSER_CONTEXT': true
					},
					dead_code: true
				},
				output: {
					comments: 'some',
				},
			},
			min: {
				files: {
					'strdash.min.js': ['strdash.js']
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['uglify']);
	grunt.registerTask('default', ['uglify']);
};
