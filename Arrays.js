// Array In JS
// --------------------------------------

// Array Declaration
// -----------------------

// let arr = [11,22,33,44,55];
// console.log(arr);

// --------------------------------------



// Insertion in Array

// // Insertion at last
// arr.push(66); 
// console.log(arr);

// // Insertion at first
// arr.unshift(10);
// console.log(arr);

// // Insertion at middle
// arr.splice(2,0,'a','b','c');
// console.log(arr);

// --------------------------------------

// Removing Array Elements
// let arr = [11,22,33,44,55];
// console.log(arr);
// Removing Elements at Last
// arr.pop();
// console.log(arr);

// Removing Element at First Index
// arr.shift();
// console.log(arr);

// Removing Elements at Middle
// arr.splice(1,2);
// console.log(arr);


// --------------------------------------

// Searching Elements In Primitive Type

// console.log(arr.indexOf(44));
// console.log(arr.indexOf(66));
// console.log(arr.includes(10));
// console.log(arr.includes(11));

// --------------------------------------

// Searchig Elements In Non-Primitive Type
// Reference or Array of Objects

// let arr = [
//     {
//         id:11,
//         naam:'Aksh',
//         sal:450000
//     },
//     {
//         id:22,
//         naam:'Shiv',
//         sal:500000
//     },
//     {
//         id:33,
//         naam:'Kharbo',
//         sal:400000
//     }
// ];

//  let dts1 = arr.find(function(details)
// {
//     return details.id==11;
// })

// console.log(dts1);

// let dts2 = arr.find(function(details)
// {
//     return details.id==22;
// })

// console.log(dts2);;

// let dts3 = arr.find(details=> details.naam === 'Kharbo');
// console.log(dts3);

// let dts1 = arr.find(details=> details.id==11);

// console.log(dts1);

// let dts2 = arr.find(details=> details.id==11);
// console.log(dts2);

// --------------------------------------

// Emptying an Array

// let arr = [1,2,3,4,5];
// console.log(arr);
// let arr2 = arr;
//  arr.splice(0,arr.length);  -->1
// while(arr.length>0)  --->2
// {
//     arr.pop();
// }
// arr.length=0; --->3
//  console.log(arr.length);
//  console.log(arr2.length);

// --------------------------------------

// Combining & Slicing Primitive

// let first = [1,2,3,4,5];
// let second = [6,7,8,9,10];
// // Combining Arrays
// let combined = first.concat(second);
// console.log(combined);

// // Sllicing Arrays
// console.log(combined.slice(1,5));

// --------------------------------------


// Combining & Slicing on Objects (Spread Operator)

// Combined Objects Using Spread Operatior

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Combined Arrays Using Spread Operatior
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let combined2 = [...arr1,...arr2];
// let combined = [...arr1,'a',false,...arr2,'b',true];
// console.log(combined2);
// console.log(combined)

// // Copy
// let copy = [...combined2];
// console.log(copy);


//----------------------------------------

//Iterable An Array
// let arr = [1,2,3,4,5];

// Using for-of loop
// for(let value of arr)
// {
//     console.log(value);
// }

// Using for-each loop
// arr.forEach(number=>console.log(number));


//----------------------------------------
// Joining Arrays
// let arr = [1,2,3,4,5,6];
// console.log(arr);

// let joined = arr.join(',');
// console.log(joined);

//----------------------------------------

// Spliting 
// let str = 'This is my first message';
// let parts = str.split(' ');
// console.log(parts)

//----------------------------------------
// Sorting an Arrays
// let arr = [10,20,50,80,30];
// // console.log(arr.sort());
// let number = parseInt(arr);
// let sort = arr.sort();
// console.log('Sorting in Accending Ordered: '+ sort);
// let reverse = sort.reverse();
// console.log('Sorting in Decending Ordered: '+ reverse);

//----------------------------------------
// Filter An Array 

// let arr = [10,30,2,4,8,12,1];
// arr.filter(function(number)
// {
//     if(number > 10)
//     {
//         console.log(number);
//     }
// })

// arr.filter(number=>
// {
//     if(number >10)
//         console.log(number)
// }
// )

//----------------------------------------
let arr = [101,102,103,104,105];
arr.map(id=>console.log('Student: '+ id));

// Map on Objects

