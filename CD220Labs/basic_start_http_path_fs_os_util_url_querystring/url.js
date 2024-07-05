//The URL module is used to divide up a web address into readable parts. 
//Here is a sample code that returns the value of the "firstName" query object from the given URL.

//The url module provides utilities for URL resolution and parsing.

const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qry = url.parse(webAddress, true);
let qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
console.log(qrydata.firstName); //outputs Clark
console.log(qrydata.lastName); //outputs Kent
console.log(qrydata); //outputs {lastName: 'Kent', firstName: 'Clark'}

console.log(qry); //outputs 
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:2000',
//     port: '2000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?lastName=Kent&firstName=Clark',
//     query: [Object: null prototype] { lastName: 'Kent', firstName: 'Clark' },
//     pathname: '/index.html',
//     path: '/index.html?lastName=Kent&firstName=Clark',
//     href: 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark'
//   }

//or more example
// const myURL = new URL('https://example.org:8080/p/a/t/h?query=string#hash');
// console.log(myURL.hostname); // 'example.org'
// console.log(myURL.pathname); // '/p/a/t/h'
// console.log(myURL.searchParams.get('query')); // 'string'