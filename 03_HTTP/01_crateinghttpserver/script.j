// first require a http
const http = require("http");

const server = http.createServer(function(req,res){
res.end("hello world")
})

server.listen(3000);
