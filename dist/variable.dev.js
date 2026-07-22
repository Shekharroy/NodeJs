"use strict";

// variable let. const, var;
var name = 'Node.js';
var version = 20; // Function declaration

function greet(user) {
  return "Hello ".concat(user, " !"); // Template Literal ES6
} // Arrow Function


var add = function add(a, b) {
  return a + b;
};

console.log(greet('Developer')); // expected output->  Hello Developet;

console.log(add(5, 7));
console.log('Name: ' + name);
console.log('Version: ' + version);