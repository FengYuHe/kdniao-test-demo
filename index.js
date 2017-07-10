/**
 * Created by heyufeng on 2017/7/6.
 */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/test', function(req, res) {
    res.end(1);
});

app.post('/kdniao', function(req, res) {
    console.log('------------------------------------');
    console.log(new Date());
    console.log(req.body);
    let data = JSON.stringify(req.body);
    fs.writeFile('log.txt', `${new Date()}\n`, { 'flag': 'a' }, function(err) {
        if (err) data = JSON.stringify(err);
        fs.writeFile('log.txt', `${data}\n`, { 'flag': 'a' });
    });
    console.log('------------------------------------');
    res.json({
        "EBusinessID": "1294238",
        "UpdateTime": new Date(),
        "Success": true
    });
});

app.listen(4142, ()=> {
    console.log(`Listen port to 4142`);
});