/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    
    let p =  new Promise(function(resolve){
       resolve();
    });
    for(let i=0;i<milliseconds*1000000*3;i++){}
    return p;
}
// console.log("Start");
// sleep(5000)
// console.log("End");
module.exports = sleep;
