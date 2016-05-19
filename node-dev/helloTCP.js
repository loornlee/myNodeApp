var net = require("net");
var port = 1235;

net.createServer(function (socket){
	console.log("A new client connected");
	
	socket.on("data", function  (data) {
		console.log("data received from client : " + data);
	})
	socket.on("close", function (data) {
		console.log("A client disconnected");
	});
}).listen(port, "localhost");

console.log("Server Running on " + port + ".\Launch http://localhost:" + port);
