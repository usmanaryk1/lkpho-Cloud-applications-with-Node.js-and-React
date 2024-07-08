//As Java Script is a single-threaded scripting language.
//Means the process can happen only sequentially and no two processes can happen simultaneously.
//JS solved this by introducing asynchronous programming through Promises.
//In ES 2017, Async/Await was introduced

//1st example without and with async-await
//In the following code sample, we have created a Promise with a callback where we handle resolve and reject.
//axios handle the js request asynchronoursly in nodeJs

//Install axios using npm first npm install axios
const axios = require('axios');

const connectToURL = (url)=>{
  const req = axios.get(url);
  req.then(resp => {
      let listOfEntries = resp.data;
      listOfEntries.forEach((entry)=>{
        console.log("simple",entry.id);
      });
    })
  .catch(err => {
      console.log(err.toString())
  });
}

console.log("Before connect URL")
connectToURL('https://jsonplaceholder.typicode.com/users');
console.log("After connect URL")

// //We will see how the same is accomplished with async/await.

const connectToURL1Async = async (url) => {
    try {
        const response = await axios.get(url);
        const listOfEntries = response.data;
        listOfEntries.forEach((entry) => {
            console.log("async-await",entry.id);
        });
    } catch (error) {
        console.error(error.toString());
    }
}

console.log("Before connect URL async-await");
// connectToURL1Async('https://api.publicapis.org/entries'); //not working use instead https://jsonplaceholder.typicode.com/users
connectToURL1Async('https://jsonplaceholder.typicode.com/users');
console.log("After connect URL async-await");

//2nd example without and with async-await
// The best use of async/await can be realized when we have a scenario where some async methods have to happen in sequence. Taking the same example as above, let's first get a list of all entries by and based on categories, send request to get the details of each entry in that category. So, these two actions have to happen one after the other but asynchronously. These can be accomplished with or without async/await. But chaining actions is much cleaner with async await, as you can observe below. In actual situations, the nesting can be multiple level and rendering the code difficult to read and maintain. In such situations, we could use async/await.
// The below code is done by nesting the second set of promises into the first.

async function connectToURL2(url) {
    try {
        const response = await axios.get(url);
        const listOfEntries = response.data;
        let categories = new Set();
        
        // Extract unique categories
        listOfEntries.forEach((entry) => {
            categories.add(entry.id);
        });

        // Request details for each category starting with 'A'
        for (let category of categories) {
            if (category.toString().startsWith("1")) {
                const resp = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${category}`);
                console.log(`${category} - ${resp.data[0].id}`);
            }
        }
    } catch (error) {
        console.error(error.toString());
    }
}

connectToURL2('https://jsonplaceholder.typicode.com/users');

// The same objective is attained using async/await.

/*
In the following code we try to get list of all entries from remote url and then based on that make request about each of the 
category starting with 'A'. Finally print the API counts of the category. We are using axios get, which returns a promise. 
*/
async function connectToURL2Async(url){
    const resp = await axios.get(url);
    let listOfEntries = resp.data;
    let Categories = listOfEntries.map((entry)=>{
          return entry.id
    });
    Categories = [...new Set(Categories)];

    Categories.forEach(async (Category)=>{
      if (Category.toString().startsWith("1")) {
              try {
                const resp = await axios({
                  method: 'get',
                  url: "https://jsonplaceholder.typicode.com/users?id="+Category,
                  responseType: 'json'
                })
                console.log(Category+"   "+resp.data[0].id);
              } 
              catch(e) {
                console.log(e);
              }
      }

    });
}
connectToURL2Async('https://jsonplaceholder.typicode.com/users').catch(err => {
    console.log(err.toString())
});
