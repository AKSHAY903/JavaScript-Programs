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

// let meraPromise = new Promise(function(resolve,reject)
// {
//   setTimeout(function()
// {
//     console.log('I AM INSIDE PROMISE');
// },3000);
// // resolve(1133);
// reject(new Error('Got Error'));
// })
// console.log('After Promise code');
// console.log(meraPromise);


// function demo()
// {
//   console.log(this);  //It's Return window Objects
// }

// demo();



// Normal Promise
// let meraPromise = new Promise(function(resolve,reject)
// {
//   console.log('I am inside promise');
//   resolve(1122);
// });
// console.log(meraPromise);
// console.log('phla')


// Async Promise

// let meraPromise1 = new Promise(function(resolve,reject)
// {
//   setTimeout(function()
// {
//   console.log('I am inside Promise1'); 
// },7000);
// resolve(3344)
// // reject(new Error ('Error Occure'));
// })

// let meraPromise2 = new Promise(function(resolve,reject)
// {
//   setTimeout(function()
// {
//   console.log('I am inside promise 2')
// },6000);
// resolve(3344);
// })
// console.log('Phla');
// console.log(meraPromise1);
// console.log(meraPromise2);


// There are two Methods in Promise

// 1-> then() is use to handle output value
// 2-> catch() is use to handle error

// let meraPromise = new Promise(function(resolve,reject)
// {
//   setTimeout(function()
// {
//   console.log('I am inside the promise');
// },5000);
// //resolve(1133);
// reject();
// });

// console.log('phla');
// // meraPromise.then((value)=>console.log(value));
// meraPromise.then((value)=>{console.log(value)},(error)=>{console.log('Received Error')});



// Call Multiple Promise Methods Using then() or Promise Chaining

// let meraPromise = new Promise(function(resolve,reject)
// {
//   setTimeout(()=>
// {
//   console.log('I am Promise-1');
// },3000)
// resolve(true);
// });

// let output = meraPromise.then(()=>
// {
//   let promise2 = new Promise(function(resolve,reject)
// {
//   setTimeout(function()
// {
//   console.log('I am inside Promise-2')
// },5000)
// resolve("return value from Promise-2");
// })
// return promise2;
// })

// output.then((value)=>console.log(value));



// async await
// async function abcd()
// {
//   return 10;
// }

// console.log(abcd());




// async-await Code

// async function utility()
// {

// let delhiMousam = new Promise((resolve,reject)=>
//   {
//     setTimeout(()=>
//     {
//       console.log('Delhi is Hot');
//     },3000);
//     resolve(true);
//   }
//   )
  
//   let hydMousam = new Promise((resolve,reject)=>
//   {
//     setTimeout(()=>
//     {
//       console.log('Hyd is Cool');
//     },7000);
//   });


//   let dM = await delhiMousam;
//   let hM = await hydMousam;
  
// }

// utility();




// Fetch-API

// async function demo()
// {
//   let con = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   console.log(con);
// }
// demo();



