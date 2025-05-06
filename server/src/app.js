const express = require('express');
const morgan = require('morgan');
const connectDb = require('./configs/db.config');
const usersRouter = require('./routes/users.routes');
const viewsRouter = require('./routes/views.routes');
const authRouter = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

// middle wares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

connectDb();
// routes
app.use('/users', usersRouter);
app.use('/views', viewsRouter);
app.use('/auth', authRouter);

module.exports = app;