var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');
let port = process.env.PORT || 3000;

//AWS Cognito Credentials
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));
// app.use(express.static(path.join(__dirname, 'css')));
// app.use(express.static(path.join(__dirname, 'fonts')));
// app.use(express.static(path.join(__dirname, 'img')));
// app.use(express.static(path.join(__dirname, 'js')));

//setting connection
var connect = "mongodb://ewu1:ottergo1385@ds359077.mlab.com:59077/vincivr" || require('./models/connect');
mongoose.connect(connect, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', index);
app.use('/', auth);
app.use('/', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
