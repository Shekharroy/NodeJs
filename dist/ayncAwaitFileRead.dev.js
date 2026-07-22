"use strict";

// readFile();
var fs = require('fs');

function readFile() {
  var data, data2;
  return regeneratorRuntime.async(function readFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log("1. Starting to read file...");
          _context.next = 4;
          return regeneratorRuntime.awrap(fs.readFile('mytext.txt', 'utf-8'));

        case 4:
          data = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(fs.readFile('mytext2.txt', 'utf-8'));

        case 7:
          data2 = _context.sent;
          console.log('2. Files read successfully!');
          return _context.abrupt("return", {
            data: data,
            data2: data2
          });

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log('Error reading  file', _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}