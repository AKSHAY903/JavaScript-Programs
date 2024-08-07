// Performance Measure


// First Methods
let t1 = performance.now();
for(let i=0;i<=10000;i++)
{
    let element1 = document.createElement('p');
    element1.textContent='This is  para '+i;

    document.body.appendChild(element1);
}
let t2 = performance.now();
let m1 = t2-t1;
console.log('first took '+ (t2-t1)+'ms');



// Second Methods
let mydiv = document.createElement('div');
let t3 = performance.now();
for(let i=0;i<10000;i++)
{
    let newElement = document.createElement('p');
    newElement.textContent='This is  para '+i;
    mydiv.appendChild(newElement);
}

document.body.appendChild(mydiv);
let t4 = performance.now();
console.log('second tooks '+ (t4-t3)+'ms');
let m2 = t4-t3;


// Third Methods
// Document Fragment 
let t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i=1;i<=10000;i++)
{
    let ele = document.createElement('p');
    ele.textContent = 'This is para';
    fragment.appendChild(ele);
}

document.body.appendChild(fragment);//1 Reflow 1 Repaint
let t6 = performance.now();
console.log('document fragment took '+ (t6-t5)+"ms");
let m3 = t6-t5;


if(m1 < m2 && m1 <m3)
{
    console.log("fist Method is best for performence"+(t2-t1)+'ms');
}
else if(m2 < m1 && m2 < m3)
    {
        console.log("Second Method is best for performence"+(t4-t3)+'ms');
    }   
    else
    {
        {
            console.log("Third Method is best for performence"+(t6-t5)+'ms' );
        }
    }