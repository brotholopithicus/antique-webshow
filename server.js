/* ===== load modules ===== */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const flash = require('flash');
const app = express();

/* ===== load routes ===== */
const routes = require('./routes/index');
const users = require('./routes/users');
const api = require('./routes/api');

/* ===== env config ===== */
const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

/* ===== database config ===== */
mongoose.connect(`mongodb://localhost:27017/pickers-webapp`);
const db = mongoose.connection;
db.on('error', (err) => {
    console.log('error connecting to database', err);
});
db.once('open', () => {
    console.log('successfully connected to mongodb');
});


/* ===== middleware config ===== */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'fTs5gyYgdRa4ftTfgYd6huUh',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use((req, res, next) => {
    req.flash('info', 'hello');
    next();
});
app.use(express.static(path.join(__dirname, 'src')));

/* ===== route config ===== */
app.use('/', routes);
app.use('/api', api);
app.use('/users', users);

/* ===== error handling ===== */
const errorHandler = require('./middleware/errorHandler');

// development error handler will print stacktrace
if (app.get('env') === 'development') {
    app.use(errorHandler.dev());
} else {
    // production error handler no stacktraces leaked to user
    app.use(errorHandler.prod());
}

module.exports = app;
