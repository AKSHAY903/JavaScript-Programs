// DOM4

// setTimeout(function() //This is asynchronous code-> It is execute at last when call stack will empty
// {
//     console.log('third');
// },3000);
// function sync()  //synchronous code
// {
//     console.log('first');
// }
// sync();
// console.log('second');



// Promise In JS


// Normal Promise Code

// let meraPromise = new Promise(function(resolve,reject)
// {
//     console.log('I am inside promise');
//     resolve(2000);
// });
// console.log('phla');


// Async Promise Code

let meraPromise = new Promise(function(resolve,reject)
{
  setTimeout(function()
{
    console.log('I AM INSIDE PROMISE');
},3000);
// resolve(1133);
reject(new Error('Got Error'));
})
console.log('After Promise code');
console.log(meraPromise);