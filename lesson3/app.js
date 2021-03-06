const express = require('express');

const { PORT } = require('./config/variables');
// const users = require('./db/users');

const app = express();

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

app.post('/auth', (req, res) => {
    console.log(req.body);
    res.json('Ok');
});

app.listen(PORT, () => {
    console.log('Listen port', PORT);
});
