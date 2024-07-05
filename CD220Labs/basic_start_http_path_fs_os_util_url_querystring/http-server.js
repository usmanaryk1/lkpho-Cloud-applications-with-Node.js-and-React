//The http module provides methods to transfer data over HTTP. To include the http module in your application, you should require it.

//Here is sample code that creates an instance of a server using the http module. This code makes use of the http.createServer() method to create the server instance.

let http = require('http');

http.createServer(function (req, res) {
    res.write('hello from server');//write a response to the client
    res.end();//end of response from server
}).listen(8080);//the server instance listens for http requests on port 6000
 console.log('Server listening on port: ' + 8080);

//write node http-server.js (neams node fileName) to run

// or
//  // Import the HTTP module
//  const http = require('http');

//  // Define the request listener function
//  const requestListener = function (req, res) {
//      res.writeHead(200); // Set the status code to 200 (OK)
//      res.end('Hello, World!'); // Send the response "Hello, World!"
//  };
 
//  // Define the port number
//  const port = 8080;
 
//  // Create an HTTP server using the request listener function
//  const server = http.createServer(requestListener);
 
//  // Start the server and listen on the specified port
//  server.listen(port);
//  console.log('Server listening on port: ' + port);

//or

// The http module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). 
// This module can create an HTTP server that listens to server ports and gives a response back to the client.

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
