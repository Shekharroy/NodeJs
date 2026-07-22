"use strict";

//Object
var user = {
  name: 'Arravi',
  age: 3.5,
  greet: function greet() {
    console.log("Hi I am ".concat(this.name, " and my age is ").concat(this.age, " year's old"));
  }
}; //Array

var colors = ['red', 'green', 'blue']; // Array methods (ES6+)

colors.forEach(function (color) {
  return console.log(color);
});
var lengths = colors.map(function (color) {
  return color.length;
});
console.log('lengths ' + lengths);
user.greet(); // console.log('Call Object: '+user.greet())