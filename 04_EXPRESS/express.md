=> EXPRESS
It is a NPM package and this is a framework 

=> Understanding the code of express 
<const express = rquire('express') 
> by this we are requiring the package of express.
<const app = express()
> basically express() is working like a function for storing it we are using it with app
> thats why in next like we use app.get we can also use anohther name but we prefer app
<app.get('/', function(req, res){
    res.send('Hello express')
})
>we use get 
>'/' this is a route for example google.com/profile  after domain name /profile is a route 
>funciton() this is a requestHandler and it is always a function
> res.send is sending response what we give
<app.listen(3000)   
> it is used for live server  

-> NOTE - when we run server by node and make changes into it to see it we restart the server by ternimal 
        but to not do this we use NODEMON by this we dont have to restrt it to use it we do 
        <nodemon script.js
        <npx nodemon script.js

=> MIDDLEWARE
Middleware is a function that runs between the request and the response. It can be used to check, modify, or process the request before sending the final response.
> in simple terms middleware request accept karne k baad response s phele ham lga skte h.

for using middleware we have to write this before app.get 

<app.use(function(req,res,next){
    console.log('middleware chala)
    next();
});
if we dont write next() then it will not send forward the request.
> in the 