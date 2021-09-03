const express = require('express');
const mongoose = require('mongoose');

const { PORT } = require('./config/variables');
// const users = require('./db/users');

const app = express();

mongoose.connect('mongodb://localhost:27017/Node');

app.use(express.json());
// app.use(express.urlencoded({extends: true}))

// const authRouter = require('./routes/auth.router');
// const userRouter = require('./routes/users.routes');
const { authRouter, userRouter } = require('./routes');

app.get('/', (req, res) => {
    // res.end('<div style="background-color: blanchedalmond">This is end</div>')
    // res.send('<h2 style="background-color: darkgoldenrod">Send respons</h2>')
    // res.write('<h1 style="background-color: bisque">Res write</h1>') // write MUst END  function end()
    // res.end();
    res.status(404).end('User not found');
});

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('*', _notFoundError);
app.use(mainErrorHandler);

app.post('/auth', (req, res) => {
    console.log(req.body);
    res.json('Ok');
});

app.listen(PORT, () => {
    console.log('Listen port', PORT);
});
function _notFoundError(err, req, res, next) {
    next({
        status: err.status || 404,
        message: err.message || 'Not found'
    });
}
// eslint-disable-next-line no-unused-vars
function mainErrorHandler(err, req, res, next) {
    res
        .status(err.status)
        .json({
            message: err.message
        });
}
