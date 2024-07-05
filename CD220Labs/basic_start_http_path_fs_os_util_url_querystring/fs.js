//The fs module is used to interact with a file system. 
//It does not need to be installed because it is part of the Node.js core and can simply be required. 
//The following code sample reads a local file synchronously using the fs module and prints the file contents to the console.

//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.


const fs = require('fs');
// Asynchronously read the file 'sample.txt'
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // Print the contents of 'sample.txt' to the console
    console.log(data);
});

// Writing to a file
// fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('File has been written');
//   });

//The fs module can also be used for input and output, known as I/O. 
//The fs module methods can be used to retrieve information from or write data to an external file.

// Read the contents of the file '/content.md' synchronously and store them in 'data'
const data = fs.readFileSync('content.md', 'utf8');
// Print the contents of 'content.md' to the console
console.log(data);