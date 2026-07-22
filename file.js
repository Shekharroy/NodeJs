// Load the filesystem module ,We load the built-in fs module
const fs = require('fs');

//Read file system asynchronously
fs.readFile('mytext.txt','utf-8', (err, data)=>{ // We call readFile to read a file
    if(err){
        console.error('Error reading file: '+ err);
        return;
    }
    console.log('File Content: '+ data);
});

console.log('Reading file... (this run first!)');
