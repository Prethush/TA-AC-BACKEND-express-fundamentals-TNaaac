let express = require('express');
let logger = require('morgan');
let cookieparser = require('cookie-parser');

let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(cookieparser());

app.use((req, res, next) => {
    res.cookie('username', 'abc');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
    res.send('<h2>Users Page</h2>');
});
app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/projects.html');
});

app.use((req, res, next) => {
    res.status(404).send('Page not found');
})

app.use((err, req, res, next) => {
    res.status(500).send(err);
});

app.listen(4000, () => {
    console.log('Server listening on port 4k');
})