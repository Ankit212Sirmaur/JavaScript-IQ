//  a callback is a fuctions that is passed inside another function as an arguments
//  to be called back at a later time

function greeting() {
    console.log('hello');
}

function takeinput(callback) {
    callback();
}

takeinput(greeting); // greeting here is callback

// example for the interviews for understanding callback
// like settimeout, map, reduce, filter, each many these

/**Why use Callback functions?

Most of the time we are creating programs and applications that operate in a synchronous manner.
In other words, some of our operations are started only after the preceding ones have completed. 
Often when we request data from other sources, such as an external API, we don’t always know when our data will be served back.
In these instances we want to wait for the response, but we don’t always want our entire application grinding to a halt\
while our data is being fetched. These situations are where callback functions come in handy. */


function serverRequest(data, callback){
    setTimeout(() =>{
        var response = data + 'full';
        callback(response);
    }, 1000);
}
function getResults(results){
    console.log('the data we get from the request is', results);
}
serverRequest('this is data format', getResults);

let arr = [1,2,43,5];

arr.map((x) => x * x);