const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const compression = require('compression')
const helmet = require('helmet')

var indexRouter = require('./routes/index');

var PORT = process.env.PORT || 8000;
var app = express();

global.appRoot = path.resolve(__dirname);

//session cookie
var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session( {
    secret: 'secure',
    name: 'session',
    keys: ['key1', 'key2'],
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        httpOnly: true,
        expires: expiryDate
    }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use(helmet());

app.use('/', indexRouter);

app.get('/favicon.ico', function(req, res) {
    res.sendFile(__dirname + '/public/images/favicon.ico');
});

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

app.listen(PORT, function() {
    console.log('Example app listening on port 8000!');
});