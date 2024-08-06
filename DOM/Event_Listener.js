document.addEventListener('click',function()
{
 this.body.style.background='gray'
 console.log('first event listener occured');
});

let head1 = document.querySelector('h1');
document.addEventListener('click',function()
{
    head1.style.cssText="background-color:orange;color:aqua;font-size:3em";
   console.log('second event listener occured');
});