const express = require('express')
const app = express()


app.use(function(req,res,next){
console.log('middleware chal gya h ');
next();
}); 


app.get('/', function(req, res){
    res.send('Hello Exress')
});

app.get('/ABOUT', function(req, res){
    res.send('Hello ExresAJKJLAKADKAs')
})

app.listen(3000)    







