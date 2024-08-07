//Closure


function init()
{
    let name = 'AKSHAY';
    function displayName()
    {
        console.log(name);
    }
    return displayName;
}
let fun1 = init();
fun1();