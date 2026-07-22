// variable let. const, var;
let name = 'Node.js';
const version = 20;

// Function declaration

function greet(user){
    return `Hello ${user} !`; // Template Literal ES6
}

// Arrow Function
const add = (a,b) => a + b;
console.log(greet('Developer')); // expected output->  Hello Developet;
console.log(add(5, 7));
console.log('Name: '+ name);
console.log('Version: '+ version)