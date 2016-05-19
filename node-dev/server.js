var http = require("http"),
    port = 8081;  //no funciona con el puerto 1234.... EACCES error
 
var server = http.createServer(function(request,response){  
    response.writeHeader(200, {"Content-Type": "text/plain"});  
    response.write("Hello HTTP!");  
    response.end();  
});
 
server.listen(port);  
console.log("Server Running on "+port+".\nLaunch http://localhost:"+port);
