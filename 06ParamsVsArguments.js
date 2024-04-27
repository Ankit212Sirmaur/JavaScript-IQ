
// params vas arguements 

function square(num) { // params => those values which we received inside the function
    return num * num;
}

square(5); // arguments => the values that we passed during calling of the function;

const fn = (a, x, y, ...n) => {
    console.log(x, y, n);
}

fn(5, 6, 3, 7, 8, 9);

/**
 *  output x => 6, 
 *         y => 3,
 *         n => [7,8,9]
 */


function multiply(... nums){
    console.log(nums);
}

var arr = [1,2];

multiply(...arr);