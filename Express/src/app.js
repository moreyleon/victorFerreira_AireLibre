var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const override = require('method-override');
const session = require('express-session');
const cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');


var apiarticuloRouter = require('./routes/api/articulo');
var cartRouter = require('./routes/api/cart');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(override('_method'));

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(session({
  secret : 'secreto',
  resave : false,
  saveUninitialized : true
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);


app.use('/api/articulo', apiarticuloRouter);
app.use('/api/cart', cartRouter);


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
