// // let Variable

// {
//     let x = 10;
//     console.log(x);
// }
// // console.log(x); ->> We can not access


// // var Variable

// {
//     var y = 20;
//     console.log('inside the block'+ y);
// }
// console.log('outside the block'+y);

// function walk()
// {
//     var z = 30;
//     console.log('inside the function'+ z);
// }
// // console.log('outside the funtion: '+ z); -->> We can't access

// walk();


let arr1 = [1,2,3,4,5];
let total = 0;
// for(let value of arr1)
// {
//     total = total+value;
// }
// console.log(total);

let ans = arr1.reduce((accumeulator,currentValue)=>accumeulator+currentValue,0);
console.log(ans);