// it is type of the function that runs immediately as it is invoked

// function square(num){
//     console.log(num * num);
// }

// square(9)

// but in the case of IIFE => we have to wrap them inside the parenthesis and call it right away

(function square2(num){
    console.log(num * num);
})(5);


//❓❔ output based quetions
(function x(a){
    return (function y(b){
        console.log(a);
    })(2)
})(1);
