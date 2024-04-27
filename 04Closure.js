// closure => the ability of the function to access the variable and the functions that are lexically out of its scope called closure.
/**  so closure are created whenever a new function are created because that function have the reference of its outer scope
 * */ 

function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    return innerFunction; // Returning innerFunction, which forms a closure
}

// Creating a closure by calling outerFunction
let closure = outerFunction();

// Even though outerFunction has finished executing,
// innerFunction still has access to the outerVariable
closure(); // Output: "I am from the outer function"
