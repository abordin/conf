module.exports = function(grunt) {

	grunt.initConfig({

		less: {
			compilar: {
		        expand: true,
		        cwd: 'assets/less',
		        src: ['**/*.less'],
		        dest: 'public/css', 
		        ext: '.css'
	      	}
	    }, 

		watch: {
			less: {
				options: {
					event: ['added', 'changed']
				},
				files: 'assets/less/**/*.less', 
				tasks: 'less:compilar'
			}
		},

		browserSync: {
			public: {
				bsFiles: {
					src : ['public/**/*', 'app/views/**/*.html', 'config/settings.json']
				}
			}, 
			options: {
				proxy: 'localhost:3000',
				watchTask: true
			}
		}, 

		express: {
			dev: {
				options: {
					script: 'server.js'
				}
			}
		}, 

		smushit: {
			images: {
				cwd: 'assets/img',
				expand: true,
				src: ['**/*.{png,jpg,jpeg,gif}'],  
				dest: 'img'
			},
		}, 

		imagemin: {
			options: {
 				optimizationLevel: 7 
 			}, 
			images: {
				cwd: 'assets/img',
				expand: true,
				src: ['**/*.{png,jpg,jpeg,gif}'],  
				dest: 'public/img'
			},
		}, 

		clean: {
			img: {
				src: ['public/img']
			}
		}
	});

	grunt.registerTask('default', ['express', 'browserSync', 'watch']);
	grunt.registerTask('otimizarImagens', ['clean', 'imagemin']);
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-smushit');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	
}
