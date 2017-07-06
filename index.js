/**
 * Created by heyufeng on 2017/7/6.
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/kdniao', function(req, res) {
    console.log(req.body);
    res.json({
        "EBusinessID": "1294238",
        "UpdateTime": new Date(),
        "Success": true
    });
});

app.listen(4142, ()=> {
    console.log(`Listen port to 4142`);
});