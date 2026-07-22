"use strict";

// Creating Promise
var myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var success = Math.random() > 0.5;

    if (success) {
      resolve('Operation Successfully Completed !');
    } else {
      reject(new Error('Operation Faild !'));
    }
  }, 1000);
}); // Using The Promise 

myPromise.then(function (result) {
  return console.log('Success; ', result);
})["catch"](function (error) {
  return console.log('Error: ', error.message);
});