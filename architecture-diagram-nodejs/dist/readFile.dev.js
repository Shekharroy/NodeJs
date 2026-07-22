"use strict";

// Import fs (File System) modules using require() function;
var fs = require('fs');

console.log('Before file read!');
fs.readFile('../mytext.txt', 'utf-8', function (err, data) {
  if (err) throw err;
  console.log("File content: - ".concat(data));
});
console.log('After file read '); // As per written this print after file is read. 
// But Node.js is Asynchronous that why did not wait for file reading completion; 
// and pick the next task and complete it. In between file reading is completed and execute it and print it.
// Synchronous Execution Program below
// console.log('Start of blocking code');
// const data = fs.readFileSync('../mytext.txt', 'utf8'); // Blocks here
// console.log(data);
// console.log('Blocking operation completed');