var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('view options', { layout: true });
app.set('views', './views');

app.get('/stooges/:name?', function(req, res, next) {
    var name = req.params.name;
    switch ( name ? name.toLowerCase() : '' ) {
        case 'larry':
        case 'curly':
        case 'moe':
            res.render('index', {title: name, message: 'Hey man'});
            break;
    
        default:
            next();
    }
});

app.get('/stooges/*?', function(req, res){
    res.render('index', {title: 'Nome invalido', message: null});
});

app.get('/?', function(req, res){
res.render('index', {title:'Acesso Negado',message: 'FORA!!'});
});

var port = 8081;
app.listen(port);
console.log('Listening on port ' + port);
