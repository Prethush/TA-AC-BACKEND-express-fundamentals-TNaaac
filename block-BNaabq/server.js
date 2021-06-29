let express = require('express');
let cookieparser = require('cookie-parser');
let logger = require('morgan');
let app = express();

app.use(cookieparser());
app.use(logger('dev'));
app.use('/about', (req, res, next) => {
    res.cookie('username', 'prethush');
    next();
})
app.get('/about', (req, res) => {
    console.log(req.cookies);
    res.send('WElcome to Express');
})

app.listen('3000', () => {
    console.log('Server is listening on port 3k');
})