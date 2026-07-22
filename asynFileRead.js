// Import fs (File System ) using require function

const fs = require('fs');

console.log("1. Before Starting File Reading...");

const data = fs.readFile('mytext.txt', 'utf-8',(err, data)=>{
    if(err) throw err;
    console.log("2. File Content:- ", data);
});

console.log("3. I am the last line of the code. Done!")


// Excution is 1, 3, 2 <<-- Why Because this is Asynchronous Node.js Programming of file reading. 
// This program did not wait for reading and complition of file reading. 