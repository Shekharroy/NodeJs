"use strict";

function fetchData() {
  return new Promise(function (resolve, reject) {
    //Simulating error
    reject(new Error('Network Error'));
  });
}

fetchData().then(function (data) {
  return console.log('Data: ', data);
}, function (error) {
  return console.log('Handle Error In then: ', error.message);
}); // Alternatuve method

fetchData().then(function (data) {
  return console.log('Data: ', data);
})["catch"](function (error) {
  return console.log('Handling error in catch: ', error);
});