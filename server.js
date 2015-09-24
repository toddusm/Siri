var http = require('http');
var server = http.createServer();
var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that.","Todd is the Node Master here!!!!", "Play Seek and Spell!"];

server.listen(8887);

server.on('request', function(request, response){
   if(request.method === 'GET') { function getMessage() {
   return {message: messages[Math.floor(Math.random() * messages.length)]};
  };
  response.writeHead(200, {
  'Connection': 'close',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
});

  response.end(JSON.stringify(getMessage())); }
 else if(request.method === 'OPTIONS'){
	  response.writeHead(200, {
  'Connection': 'close',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
  response.end();
  }
})

// function getRandomInt(min, max){
// 	return Math.floor(Math.random() * )
// }