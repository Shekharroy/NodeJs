"use strict";

var fs = require('fs').promises;

function loadUserData(userId) {
  var data, user;
  return regeneratorRuntime.async(function loadUserData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fs.readFile("users/".concat(userId, ".json"), 'utf-8'));

        case 3:
          data = _context.sent;
          user = JSON.parse(data);

          if (user.email) {
            _context.next = 7;
            break;
          }

          throw new Error("Inavlaid user data: missing email");

        case 7:
          return _context.abrupt("return", user);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);

          if (!(_context.t0.code === 'ENOENT')) {
            _context.next = 16;
            break;
          }

          throw new Error("User ".concat(userId, " not found"));

        case 16:
          if (!(_context.t0 instanceof SyntaxError)) {
            _context.next = 18;
            break;
          }

          throw new Error('Inavalid user data formate.');

        case 18:
          throw _context.t0;

        case 19:
          _context.prev = 19;
          // Clean code that run weather successful or not
          console.log("Finished processing user ".concat(userId));
          return _context.finish(19);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10, 19, 22]]);
} // Usage


(function _callee() {
  var user;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(loadUserData(123));

        case 3:
          user = _context2.sent;
          console.log('User loaded', user);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error('Failed to load user: ', _context2.t0.message);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
})();