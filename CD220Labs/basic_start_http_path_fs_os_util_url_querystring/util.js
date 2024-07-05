//The Node.js util module is intended for internal use for accomplishing such tasks as debugging and deprecating functions. 
//Say you want to debug a program to count the number of iterations in a loop. You could use util.format() method as follows:

// The util module is primarily used for debugging and to inspect JavaScript objects.

let util = require('util');
let str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
    console.log(util.format(str, i)); //outputs 'The loop has executed i time(s)'
}

//output
// The loop has executed 1 time(s).
// The loop has executed 2 time(s).
// The loop has executed 3 time(s).
// The loop has executed 4 time(s).
// The loop has executed 5 time(s).
// The loop has executed 6 time(s).
// The loop has executed 7 time(s).
// The loop has executed 8 time(s).
// The loop has executed 9 time(s).
// The loop has executed 10 time(s).

//or more example

// const obj = { a: 1, b: 'text', c: [1, 2, 3] };
// console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));