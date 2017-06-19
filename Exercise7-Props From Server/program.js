var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
//app.set('input1', (process.argv[3]));
//app.set('input2', (process.argv[4]));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

var data = [
   // {title:'Shopping', detail:app.get('input1')},
   // {title:'Hair cut', detail:app.get('input2')}
    {title:'Shopping', detail:(process.argv[3])},
    {title:'Hair cut', detail:(process.argv[4])}


    ];

app.use('/', function (req, res) {
    res.render('index', {data:data});
});

app.listen(app.get('port'), function () {});