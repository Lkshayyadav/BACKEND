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

// -> app.listen(3000)      


// ->  when we send data in json form or on other form we use some lines like 
app.use(express.json());
app.use(express.urlencoded({extended: true}));




