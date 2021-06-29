let express = require('express');

let app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.post('/json', (req, res) => {
    console.log(req.body);
})

app.post('/contact', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3k');
})

