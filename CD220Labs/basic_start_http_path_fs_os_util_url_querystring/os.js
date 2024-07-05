//The OS module provides methods to retrieve information from the operating system that the application is running on and interact with it. 
//This is sample code from the OS module that gets the computer's platform and architecture.

// The os module provides operating system-related utility methods and properties. 
// It can be used to get information about the host operating system.


let os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS CPU Architecture Info: " + os.arch());

console.log('Number of CPUs:', os.cpus().length);
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());

//output
// Computer OS Platform Info : win32
// Computer OS Architecture Info: x64

