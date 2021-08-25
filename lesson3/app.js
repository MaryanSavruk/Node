const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const {PORT} = require('./config/variables');
const users = require('./db/users');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extends: true}))

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    // res.end('<div style="background-color: blanchedalmond">This is end</div>')
    // res.send('<h2 style="background-color: darkgoldenrod">Send respons</h2>')
    // res.write('<h1 style="background-color: bisque">Res write</h1>') // write MUst END  function end()
    // res.end();
    res.status(404).end('User not found')
})

app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params;
    const curentUser = users[user_id];

    if (!curentUser) {
        res.status(404).end('User not found')
    } else res.json(curentUser);
})

app.post('/auth', (req, res) => {
    console.log(req.body);
    res.json('Ok')
})


app.listen(PORT, () => {
    console.log('Listen port', PORT)
});