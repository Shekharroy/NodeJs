"use strict";

// 1. callbacks (traditional)
function fetchData(callback) {
  setTimeout(function () {
    callback('Data Recieved!');
  }, 1000);
}
/**
 
    "fetchData" takes a callback function as a parameter.
    After a 1-second delay (setTimeout), it calls the callback with the result.
    Problem: Nesting multiple callbacks leads to "callback hell" — deeply indented, hard-to-read code.

 */
// 2. Promises (ES6+)


var fetchDataPromise = function fetchDataPromise() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve('Promise Resolved!');
    }, 1000);
  });
};
/**

Returns a Promise object instead of accepting a callback.
When the async work finishes, resolve is called with the result.
The caller attaches .then() to handle the result, which chains cleanly and avoids nesting.
 */
// 3. Async/Await(ES8+)


function getData() {
  var result;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetchDataPromise());

        case 2:
          result = _context.sent;
          console.log(result);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

getData(); // call async function

/*
    Syntactic sugar over Promises — makes async code look synchronous.
    await pauses execution inside the async function until the Promise resolves.
    Much more readable than callbacks or .then() chains, especially for complex sequences

    In short: Callbacks are the old way → Promises improved chaining → Async/Await makes it read like normal sequential code. Modern JavaScript almost always uses async/await for readability.
    
*/