const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
// const db = require('./db');
// const dbHelpers = require('./Helpers/dbHelpers')(db);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/api/users', usersRouter(dbHelpers));

module.exports = app;

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
