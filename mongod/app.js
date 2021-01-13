var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
// mongoose 相关
const mongoose = require('mongoose')


var app = express();
// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/images/", express.static(path.join(__dirname, './images/')))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
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
mongoose.connect('mongodb://localhost/sign_server', {useNewUrlParser: true})
    .then(() => {
      console.log('连接数据库成功!!')
      app.listen(4000, () => {
        console.log('服务器启动成功, 请访问: http://localhost:4000')
      })
    })
    .catch(error => {
      console.error('连接数据库失败！！！', error)
    })

module.exports = app;
