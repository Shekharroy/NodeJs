// 1. callbacks (traditional)

function fetchData(callback){
    setTimeout(()=>{
        callback('Data Recieved!')
    },1000);
}

/**
 
    "fetchData" takes a callback function as a parameter.
    After a 1-second delay (setTimeout), it calls the callback with the result.
    Problem: Nesting multiple callbacks leads to "callback hell" — deeply indented, hard-to-read code.

 */


// 2. Promises (ES6+)

const fetchDataPromise = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>resolve('Promise Resolved!'), 1000)
    });
};

/**

Returns a Promise object instead of accepting a callback.
When the async work finishes, resolve is called with the result.
The caller attaches .then() to handle the result, which chains cleanly and avoids nesting.
 */

// 3. Async/Await(ES8+)

async function getData(){
    const result  =  await fetchDataPromise();
    console.log(result);
}


getData() // call async function

/*
    Syntactic sugar over Promises — makes async code look synchronous.
    await pauses execution inside the async function until the Promise resolves.
    Much more readable than callbacks or .then() chains, especially for complex sequences

    In short: Callbacks are the old way → Promises improved chaining → Async/Await makes it read like normal sequential code. Modern JavaScript almost always uses async/await for readability.
    
*/