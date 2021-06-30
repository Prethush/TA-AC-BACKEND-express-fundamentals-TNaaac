let express = require('express');
let app = express();


app.use((req, res, next) => {
    let time = new Date();
    console.log(req.method, req.url, time);
    next();
})

app.use('/form', (req, res, next) => {
    let store = "";
    console.log(req.headers['content-type']);
    req.on('data', (chunk) => {
        store += chunk;
    })
    req.on('end', () => {
        if(store) {
            req.body = JSON.parse(store);
            res.send(req.body);
        }
    })
    
})


app.use((req, res, next) => {
    let rootPath = __dirname + '/public';
    if(req.url !== '/') {
        res.sendFile(rootPath + req.url);
    } else {
        next();
    } 
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(5000, () => {
    console.log('server is listening on port 5k');
})