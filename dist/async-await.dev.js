"use strict";

function getdata() {
  var result;
  return regeneratorRuntime.async(function getdata$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Starting...');
          _context.next = 3;
          return regeneratorRuntime.awrap(someAsyncOperation());

        case 3:
          result = _context.sent;
          console.log("Result:- ".concat(result));
          return _context.abrupt("return", result);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function someAsyncOperation() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve('Operation Completed');
    }, 1000);
  });
}

getdata().then(function (data) {
  return console.log('Final data: ', data);
});