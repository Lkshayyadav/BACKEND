# 📄 Express.js Notes

=> setting up parser  
app.use(express.json());  
<app.use(express.urlencoded({ extended: true }));  

=> setting up ejs  
. install ejs  
. setup ejs as a view engine  
<app.set('view engine', 'ejs');

-> after this we will created a folder  
views → in this we have .ejs files  

-> because we are using ejs we now don’t use res.send  
we will use res.render with the file name of .ejs  
<res.render((filename).ejs)  

ejs → it is like HTML



=> setting up public static files
<app.use(express.static(path.join(_dirname,'public)));

## 📂 Serving Public Static Files in Express

To serve static files like **CSS**, **images**, or **JavaScript**, we use the `express.static()` middleware.

### 📌 Code:
```js
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

-> __dirname gives the current folder path.
-> 'public' is the folder where static files are stored.
-> path.join(__dirname, 'public') creates a full path to the public folder.
-> express.static() tells Express to serve files from that folder.



=> # Dynamic routing and Param use

so when we have route which value will be change for example /prfiel/username
username will ot be sam so we will use 
-> /profile/:username 

for sending response we will use 
res.send(req.param.username) >by this it will print the username give 
to modify it more properly we uses :
 const value = req.params.username;
  res.send("You sent: " + value);

