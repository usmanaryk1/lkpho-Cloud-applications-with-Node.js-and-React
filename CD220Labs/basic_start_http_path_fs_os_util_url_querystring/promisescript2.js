//Create and execute a script with two promises
//1- Create a script which has two methods that return promises - One of the promises should get reolved after 6 seconds timeout and the other one after 3 seconds timeout. Call the promise in such a way that the second promise is invoked after the first promise is resolved.

let myPromise01 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 01 resolved")
    },6000)})

let myPromise02 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 02 resolved")
    },3000)})

  myPromise01.then((successMessage) => {
    console.log("From Callback " + successMessage)
    myPromise02.then((successMessage) => {
      console.log("From Callback " + successMessage)
    })
  })

  //output
  // From Callback Promise 01 resolved
  // From Callback Promise 02 resolved


//2-Change the code to call the promises sequentially and see how the output changes.

let myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved")
    },6000)})

let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved")
    },3000)})

  myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })

  myPromise2.then((successMessage) => {
  console.log("From Callback " + successMessage)
})

//output
  // From Callback Promise 02 resolved
  // From Callback Promise 01 resolved

