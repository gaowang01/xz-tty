//@废弃
module.exports = function(grunt){
	//配置插件 jshit称为任务名 jshint.files称为目标名，
	//options 可用来覆盖属性的默认值
	grunt.initConfig({
		jshint:{
			files:['main.js','Gruntfile.js','public/js/**/*.js'],
			options:{
				globals:{
					jQuery:true
				}
			}
		},

		sass:{
			dist:{
				//target option
				options:{
					style:'expanded',
					sourcemap:'none',
				},
				//动态构建文件对象
				files:[{
					expand:true,
					cwd:'./public/sass',
					src:'*.scss',
					dest:'./public/css',
					ext:'.css'
				}]
			},
		},
		watch:{
			css:{
				files:'./public/sass/**/*.scss',
				tasks:'sass',			
				options:{
					livereload:true
				}
			}
		}
	});
	//加载插件
	['grunt-contrib-jshint','grunt-contrib-sass','grunt-contrib-watch'].forEach(function(task){
		grunt.loadNpmTasks(task);
	});
	//注册任务
	grunt.registerTask('test',['watch']);
	grunt.registerTask('default',['jshint','sass']);
};