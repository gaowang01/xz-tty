//express
var express = require('express');
var app = express();
//view engine
var hbs = require('express-hbs');
//use '.hbs' for extensions and find partials in 'views/partials'
app.engine('hbs',hbs.express4({
	partialsDir:__dirname + '/views/partials'
}));
//指定静态资源目录
app.use(express.static(__dirname + '/public'));
//cookie
// 

//view engine
app.set('view engine','hbs');
app.set('views',__dirname + '/views');
//routes
require('./routes.js')(app);


app.listen(8080,function(){
	console.log('app start at port 8080');
});