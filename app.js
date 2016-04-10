var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');
var nodemailer = require('nodemailer');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.locals.moment = moment;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var gmailpw = process.env.CAITERS_GMAIL_PASS;
var transporter = nodemailer.createTransport('smtps://ayashi%40valefor.com:'+ gmailpw +'@smtp.gmail.com');

app.post('/contact', function(req,res){
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;', // grab form data from the request body object
    to: 'ayashi+caiters@valefor.com',
    subject: 'Caiters.com contact form',
    text: req.body.message
  };

  transporter.sendMail(mailOpts, function(error, response){
    if (error) {
      // Email not sent
      res.json({ msg: 'Error occured - message not sent', err:true });
    } else {
      // Email sent!
      res.json({ msg: 'Message sent! Thank you.', err:false });
    }
  });
});

app.use('/', routes);

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
