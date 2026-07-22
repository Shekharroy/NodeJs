"use strict";

var fs = require('fs').promises;

var promises1 = Promise.resolve('First result');
var promises2 = new Promise(function (resolve, reject) {
  return setTimeout(function () {
    return resolve('Second result');
  }, 1000);
});
var promises3 = fs.readFile('mytext.txt', 'utf-8'); //Read local instead of fetch

Promise.all([promises1, promises2, promises3]).then(function (result) {
  console.log('Results: ', result);
})["catch"](function (error) {
  console.log('Error in one of the promises: ', error);
});