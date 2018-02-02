// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var GOOD_PORT = 7000;
var BAD_PORT = 7500;


// Create a generic function to handle requests and responses
function handleGoodRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You are good: " + request.url);
}

// Create a generic function to handle requests and responses
function handleBadRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You are bad: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var goodServer = http.createServer(handleGoodRequest);
var badServer = http.createServer(handleBadRequest);


// Start our server so that it can begin listening to client requests.
goodServer.listen(GOOD_PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + GOOD_PORT);
});


// Start our server so that it can begin listening to client requests.
badServer.listen(BAD_PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + BAD_PORT);
});
