
var mock_project = [{
	title:'天天易0099',
	takeTime:99,
	profit:5.5,
	total:99999,
	sold:66666,
	state:0,
	protected:true
}]


exports.render = function(req,res){
	res.render('./home');
}

exports.generateList = function(req,res){
	var list = [{name:'james',say:'yes'},{name:'sam',say:'no'}];
	console.log('server-list=',list);
	res.send(list);
}
