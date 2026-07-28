"use strict";

// Simulate an API call fails
function fetchUserdata() {
  var response, user;
  return regeneratorRuntime.async(function fetchUserdata$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(simulateHttpRequest());

        case 3:
          response = _context.sent;

          if (response.ok) {
            _context.next = 6;
            break;
          }

          throw new Error("HTTP error: ".concat(response.status));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          user = _context.sent;
          console.log('User data: ', user);
          return _context.abrupt("return", user);

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.error('Error in fetchUserdata: ', _context.t0.message);
          throw _context.t0;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
} //Simulating the HTTP request that fails


function simulateHttpRequest() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        ok: false,
        status: 404,
        json: function json() {
          return Promise.resolve({
            error: 'Not found'
          });
        }
      });
    }, 1000);
  });
} //using catch with an async function


fetchUserdata()["catch"](function (error) {
  console.log('Caught outside of async function: ', error.message);
});