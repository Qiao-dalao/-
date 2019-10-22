var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const db = require('./model/db')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json())


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//渲染界面路由
app.get('/items',require('./routes/items'))	//超级单品
app.get('/classes',require('./routes/classes'))	//超级品类
app.get('/brands',require('./routes/brands'))	//超级品牌
app.get('/coupons',require('./routes/coupons'))	//领券中心
app.get('/robgolb',require('./routes/robgolb'))	//抢金币
app.get('/golbsign',require('./routes/golbsign'))	//金币签到
//app.get('/login',require('./routes/login'))		//登录
app.get('/recharge',require('./routes/recharge'))//充值
app.get('/myorder',require('./routes/myorder'))//我的订单

app.get('/login',require('./routes/login'))		//登录
app.get('/register',require('./routes/register'))	//注册
app.get('/login',require('./routes/login'))		//登录


app.get('/login',require('./routes/login'))		//登录
app.get('/register',require('./routes/register'))	//注册

app.use('/', indexRouter);	//主页

//功能路由
app.get('/add',require('./api/add'))
app.use('/user/login',require('./api/login'))
app.use('/user/register',require('./api/register'))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
