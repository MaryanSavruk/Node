const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const { PORT } = require('./config/variables');
const users = require('./db/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('views', path.join(__dirname, 'static'));

app.get('/', (req, res) => {
    // res.end('<div style="background-color: blanchedalmond">This is end</div>')
    // res.send('<h2 style="background-color: darkgoldenrod">Send respons</h2>')
    // res.write('<h1 style="background-color: bisque">Res write</h1>') // write MUst END  function end()
    // res.end();
    res.status(404).end('User not found');
});

app.get('/users', (req, res) => {
    res.render('users', { users });
});
app.get('/users/:user_id', (req, res) => {
    const { user_id } = req.params;
    const curentUser = users[user_id];

    if (!curentUser) {
        res.status(404).end('User not found');
    } else res.json(curentUser);
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/auth', (req, res) => {
    console.log(req.body);
    res.json('Ok');
});

// app.get('/users', (req, res) => {
//     res.json(
//         [
//             {name: 'Sveta'},
//             {name: 'Oleg'}
//         ]
//     )
//
// })

app.listen(PORT, () => {
    console.log('Listen port', PORT);
});
