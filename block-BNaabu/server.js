let express = require('express');
let app = express();

app.use((req, res, next) => {
    if(req.url === '/admin') {
        next('Unauthorized');
    }
    next();
})
app.get('/', (req, res) => {
    res.send('Index Page');
})

app.get('/about', (req, res) => {
    res.send('About Page');
})
app.use((req, res, next) => {
    res.send('Page not Found');
})

app.use((err, req, res, next) => {
    res.send(err);
} )

app.listen(3000, () => {
    console.log('Server is listening on port 3k');
})