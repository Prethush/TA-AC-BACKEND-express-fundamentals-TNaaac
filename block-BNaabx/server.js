let express = require('express');
let app = express();
let store = "";

app.use((req, res, next) => {
    let time = new Date();
    console.log(req.method, req.url, time);
    next();
})

app.use((req, res, next) => {
    req.on('data', (chunk) => {
        store += chunk;
    })
    req.on('end', () => {
        if(store) {
            req.body = JSON.parse(store);
            res.end();
            
        } else {
            next();
        } 
    })
})

app.use((req, res, next) => {
    let rootPath = __dirname + '/public';
    res.sendFile(rootPath + req.url);
})


app.listen(5000, () => {
    console.log('server is listening on port 5k');
})