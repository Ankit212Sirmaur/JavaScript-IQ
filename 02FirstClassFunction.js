//  so when a function treated like a variable, their function called First class Function
//  in these cases function can be passed into anther function as a argument 
//  these function can be manipulated and return from the that function

function square(num){
    return num * num;
}

function calculate(callback){
    return callback;
}

let ans = calculate(square(5));
console.log(ans);