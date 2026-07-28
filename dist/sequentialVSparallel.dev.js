"use strict";

// Helper function to Simulate an API call
function fetchData(id) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data for ID ".concat(id));
    }, 1000);
  });
} //Sequentila Operation take ~3 seconds


function fetchSequential() {
  var data1, data2, data3;
  return regeneratorRuntime.async(function fetchSequential$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.time('Sequential ...');
          _context.next = 3;
          return regeneratorRuntime.awrap(fetchData(1));

        case 3:
          data1 = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(fetchData(2));

        case 6:
          data2 = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(fetchData(3));

        case 9:
          data3 = _context.sent;
          console.timeEnd('sequential');
          return _context.abrupt("return", [data1, data2, data3]);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
} // Parallel  Operation -take ~1 second


function fetchParallel() {
  var result;
  return regeneratorRuntime.async(function fetchParallel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.time('Parallel.');
          _context2.next = 3;
          return regeneratorRuntime.awrap(Promise.all([fetchData(1), fetchData(2), fetchData(3)]));

        case 3:
          result = _context2.sent;
          console.timeEnd('Parallel.. ');
          return _context2.abrupt("return", result);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
} // DemoDe


function runDemo() {
  var seqResult, parResult;
  return regeneratorRuntime.async(function runDemo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log('Running Sequentially...');
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetchSequential());

        case 3:
          seqResult = _context3.sent;
          console.log(seqResult);
          console.log('\nRunning in Parallel...');
          _context3.next = 8;
          return regeneratorRuntime.awrap(fetchParallel());

        case 8:
          parResult = _context3.sent;
          console.log(parResult);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
}

runDemo();