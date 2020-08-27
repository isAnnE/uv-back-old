require("dotenv").config();
require("./config/mongo");
const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const userRouter = require('./routes/user');

const app = express();


app.use(cors('*'))

const server = app.listen(8888);



// Routes

app.get("/", (req, res) => res.send("yay, the uv app is working !"));

app.use("/api/media", require("./routes/api.media"));
app.use("/api/faiseuse", require("./routes/api.faiseuse"));
app.use("/api/user", require("./routes/api.user"));
app.use("/api/article", require("./routes/api.article"));
app.use("/api/comment", require("./routes/api.comment"));
app.use("/api/country", require("./routes/api.country"));
app.use("/api/job", require("./routes/api.job"));
app.use("/api/genre", require("./routes/api.genre"));


// view engine setup
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;