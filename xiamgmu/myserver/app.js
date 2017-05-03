var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var insert = require('./routes/insert');
var find = require('./routes/find');
var post = require('./routes/post');
var removeformpost = require('./routes/removeformpost');
var mypost = require('./routes/mypost');
var showpostincar = require('./routes/showpostincar');
var regest = require('./routes/regest');
var login = require('./routes/login');
var gethot = require('./routes/gethot');
var gethotshowlist = require('./routes/gethotshowlist');
var marketrecommendation = require('./routes/marketrecommendation');
var removepropost = require('./routes/removepropost');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/insert', insert);
app.use('/api/find', find);
app.use('/api/post', post);
app.use('/api/removeformpost', removeformpost);
app.use('/api/mypost', mypost);
app.use('/api/showpostincar', showpostincar);
app.use('/api/regest', regest);
app.use('/api/login', login);
app.use('/api/gethot', gethot);
app.use('/api/gethotshowlist', gethotshowlist);
app.use('/api/marketrecommendation', marketrecommendation);
app.use('/api/removepropost', removepropost);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
