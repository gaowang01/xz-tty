module.exports = function(grunt){
	//加载插件
	['grunt-contrib-jshint'].forEach(function(task){
		grunt.loadNpmTasks(task);
	});
	//配置插件
	grunt.initConfig({
		jshint:{
			app:['main.js','Gruntfile.js','public/js/**/*.js']
		}
	});
	//注册任务
	grunt.registerTask('default',['jshint']);
};