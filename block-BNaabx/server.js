let express = require('express');
let app = express();


app.use((req, res, next) => {
    let time = new Date();
    console.log(req.method, req.url, time);
    next();
})

app.use((req, res, next) => {
    let store = "";
    req.on('data', (chunk) => {
        store += chunk;
    })
    req.on('end', () => {
        if(store && req.headers['content-type'] === 'application/json') {
            req.body = JSON.parse(store);
            console.log(req.body);
        }
    })
    
    next();
})


app.use((req, res, next) => {
    let rootPath = __dirname + '/public';
    if(req.url !== '/') {
        res.sendFile(rootPath + req.url); 
    }
    
})


app.listen(5000, () => {
    console.log('server is listening on port 5k');
})