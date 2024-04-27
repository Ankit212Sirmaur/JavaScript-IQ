/**
 * hoisting is js mechanism where variable and function both are hoisted differently means stored in the memory
 *  before the execution of the code i.e they moved to the top of the scope
 * 
 *  🪜 it's a 2 step process
 *      - first initilazation like it is local or global scope
 *      - then second execuction
 * 
 *  📌 points to be remembered 
 *      - variable hoisted with undefined
 *      - function expression are hoisted as it is
 */


// questions based on the interviews

var x = 21;

var fun = function (){
    console.log(x);  // undefined
    // here inside the function at this moment x is not being initialized because here x is present there
    var x = 20;
}
fun();


var x = 21;

var fun = function (){
    console.log(x);
    // but here  x is not present there so it will search one step outside this scope and then got x in the global scope
}
fun();