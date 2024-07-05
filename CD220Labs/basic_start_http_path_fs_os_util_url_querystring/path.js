// The path module allows you to retrieve and manipulate directory and file paths.
// The following code retrieves the last portion of a given file path and prints that value to the console:

const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); //outputs home.html to the console

//or more example
// The path module provides utilities for working with file and directory paths. 
// It can be used to handle and transform file paths.

// // Joining path
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// // Resolving path
// console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'));