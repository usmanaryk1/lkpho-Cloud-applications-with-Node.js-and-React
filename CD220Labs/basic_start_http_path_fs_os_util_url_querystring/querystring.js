//The querystring module provides methods to parse through the query string of a URL.
//For example,

let qry = require('querystring');
let qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); //returns Clark
console.log(qryParams.lastName); //returns Clark

// The querystring module provides utilities for parsing and formatting URL query strings.

// const parsed = querystring.parse('foo=bar&abc=xyz&abc=123');
// console.log(parsed);
// const stringified = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// console.log(stringified);