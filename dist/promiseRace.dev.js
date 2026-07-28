"use strict";

var promise1 = new Promise(function (resolve) {
  return setTimeout(function () {
    return resolve('First result...');
  }, 1000);
});
var promise2 = new Promise(function (resolve) {
  return setTimeout(function () {
    return resolve('second result...');
  }, 500);
});
Promise.race([promise1, promise2]).then(function (result) {
  console.log('Fastest Result:', result);
})["catch"](function (error) {
  return console.log("Error: ", error);
});