const fs = require('fs').promises;

const promises1 = Promise.resolve('First result');
const promises2 = new Promise ((resolve, reject)=> setTimeout(()=> resolve('Second result'), 1000));
const promises3 = fs.readFile('mytext.txt', 'utf-8'); //Read local instead of fetch

Promise.all([promises1, promises2, promises3])
.then(result => {
    console.log('Results: ',result);
}).catch(error =>{
    console.log('Error in one of the promises: ', error);
});