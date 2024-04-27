/** Event loop in JavaScript enables the efficient handling of asynchronous operations and 
 *  events within a single threaded execution model due which it helps to understanding vital 
 *  writing responsive and non-blocking  JS Code
 * 
 *  Event loop continously watching the call stack which of the code is running and do the operations accordingly
 *  🔴 call stack => The call stack in js keep track of the functions that are currently executing
 *                   when a function is called it push to the this call stack and when it completes it removed from there.
 * 
 *  🔴 callback queue => when an asynchronous operation completes or events a callback associated with that operation is placed 
 *                        in the callback queue
 * 
 *  🔴 microtask queue => it is also a seperate queue that handles the high priority asynchronous tasks. These tasks are usually related 
 *                         to promises and JS API's
 *  📝 if both of the queue is executed and waiting for their called then the high priority queue will excute first 
 *      i.e microtasks queue are executed 
 */

console.log('start');

const fun1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log('printing after 1 sec');
    }, 1000)
    resolve('Promise resolved successfully');
})

fun1.then(function fullfillmentHandler(data) {
    console.log(data,'this data that we get when promised get resolved successfully');
}, function rejectionHandler() {
    console.log(data,': this data that we get when promised get rejected ');
})

console.log(fun1);