let express = require('express');
let logger = require('morgan');
let app = express();

app.use(logger('dev'));

app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/new.html');
})

app.get('/users/:username', (req, res) => {
    res.send(req.params.username);
})

app.post('/new', (req, res) => {
    res.json(req.body);
})
app.listen(3000, () => {
    console.log('Server is listening on port 3k');
})