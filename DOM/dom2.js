
// let body = document.querySelector('body');
// document.addEventListener('click',function()
// {
//     body.style.backgroundColor='orange';
// });

// let head = document.querySelector('h1');
// head.addEventListener('click',function()
// {
//     head.style.cssText="background-color:blue;color:red;font-size:3em";
// })

// function eventClick()
// {
//     console.log('event Clicked Happed');
// }


// // Add Event Listener
// document.addEventListener('click',eventClick);

// // Remove Event Listener
// document.removeEventListener('click',eventClick);


// Event Object 

// let myname = document.querySelector('h1');
// document.addEventListener('click',function(event)
// {
//     console.log(event);
// })


// Prevent Default Actions

// let links = document.querySelectorAll('a');
// let first = links[0];
// first.addEventListener('click',function(event)
// {
//     event.preventDefault();
//     console.log('first link has been changed Prevent Default Action')
// })



// Avoid Too Many Events

// let mydiv = document.createElement('div');
// function paraStatus(event)
// {
//     console.log('clicked on para'+ event.target.textContent);
// }
// mydiv.addEventListener('click',paraStatus)
// for(let i=1;i<=100;i++)
// {
//     let para = document.createElement('p');
//     para.textContent='This is para - '+i
//     mydiv.appendChild(para);
// }

// document.body.appendChild(mydiv);



// Apply Filtering on JS CODE
// let content = document.querySelector('#wrapper');
// content.addEventListener('click',function(event)
// {
//     if(event.target.nodeName==='SPAN')
//     {
//    console.log('Span pr click kiya h'+ event.target.textContent);
//     }
// })

