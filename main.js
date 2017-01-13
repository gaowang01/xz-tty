//express
var express = require('express');
var app = express();
//view engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
//指定静态资源目录
app.use(express.static(__dirname + '/public'));
//cookie
 
//routes
require('./routes.js')(app);

app.listen(8080,function(){
	console.log('app start at port 8080');
});