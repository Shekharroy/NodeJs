"use strict";

var fs = require('fs').promises;

function readFile() {
  var data;
  return regeneratorRuntime.async(function readFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fs.readFile('mytext.txt', 'utf-8'));

        case 3:
          data = _context.sent;
          console.log("Data is:- ".concat(data));
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error Reading File: ', _context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

readFile();