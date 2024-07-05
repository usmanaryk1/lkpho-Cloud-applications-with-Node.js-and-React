 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    // return aestTime; // Return the formatted date and time

     // Convert the formatted date and time string back to a Date object
     let dateObj = new Date(aestTime);
     return dateObj; // Return the Date object
};
