const request = require('request');
const url = 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx?DataSign=ODc0MmI5Y2U2ZDFjY2NhYTk4NTI0MDQ3NjczZmFkZGU%3d&DataType=2&EBusinessID=1294238&RequestData=%7b%22LogisticCode%22%3a%223839915638681%22%2c%22ShipperCode%22%3a%22YD%22%7d&RequestType=1002';

request.post({url, form: {LogisticCode:"3839915638681",ShipperCode:"YD"}}, function(err, res, body){
    console.log(err);
    console.log(body);
});