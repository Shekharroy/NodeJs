//Object

const user = {
    name: 'Arravi',
    age: 3.5,
    greet(){
        console.log(`Hi I am ${this.name} and my age is ${this.age} year's old`);
    }
};

//Array

const colors = ['red', 'green', 'blue'];

// Array methods (ES6+)

colors.forEach(color => console.log(color))

const lengths = colors.map(color => color.length);
console.log('lengths '+lengths);
user.greet();

// console.log('Call Object: '+user.greet())