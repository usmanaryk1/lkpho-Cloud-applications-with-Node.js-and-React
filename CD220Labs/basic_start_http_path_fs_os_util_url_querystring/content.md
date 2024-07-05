This is a content text context.

The fs module can also be used for input and output, known as I/O. The fs module methods can be used to retrieve information from or write data to an external file.

const fs = require('fs');
// Read the contents of the file '/content.md' synchronously and store them in 'data'
const data = fs.readFileSync('/content.md', 'utf8');
// Print the contents of 'content.md' to the console
console.log(data);

