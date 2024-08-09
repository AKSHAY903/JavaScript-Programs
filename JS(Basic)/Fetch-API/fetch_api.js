
// Get API Call

// let content = fetch('https://jsonplaceholder.typicode.com/posts/1');
// console.log(content);


// Get API Call

// async function gett()
// {
// let getApi = await fetch('https://jsonplaceholder.typicode.com/posts/1');  //Network Call
// let output = await getApi.json();//Network Call It return Object
// console.log(output);
// }

// gett();



 // POST API

// async function postApi() {
//     // let option = {
    //     method: 'POST',
    //    body: JSON.stringify({
    //      title: 'foo',
    //      body: 'bar',
    //      userId: 1,
    //    }),
    //    headers: {
    //      'Content-type': 'application/json; charset=UTF-8',
    //    },
    //  };
   //  let postCall = await fetch('https://jsonplaceholder.typicode.com/post',option);
    //  let response = await postCall.json();

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Akshay',
//           body: 'Healthy',
//           userId: 2000,
//           weight:70,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     let response = (await content).json();
//      return response;
// }

// async function utiliy() {
//     let ans = await postApi();
//     console.log(ans);
// }

// utiliy();



// JSON Stringify

let obj = {
 fName:'Akshay',
 age:23,
 id:1234
};

console.log(JSON.stringify(obj));



