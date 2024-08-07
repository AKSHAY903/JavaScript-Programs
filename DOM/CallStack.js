// function addPara()
// {
//     let para = document.createElement('p');
//     para.textContent='JS is Single Threaded Language';
//     document.body.appendChild(para);
// }

// function appendNewMSG()
// {
//     let para = document.createElement('h2');
//     para.textContent='Hello Jii';
//     document.body.appendChild(para);
// }


// Event Loop

console.log('Hii');
document.addEventListener('click',function()
{
    console.log('Clicked on Document');
});
console.log('Hello'); 


// Set Time Out

setTimeout(function()
{
    console.log('Set Time out function running ')
},1000);