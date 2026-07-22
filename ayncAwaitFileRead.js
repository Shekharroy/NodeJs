
// readFile();
const fs = require('fs');

async function readFile(){
    try{
        console.log("1. Starting to read file...");
        const data = await fs.readFile('mytext.txt', 'utf-8');
        const data2 = await fs.readFile('mytext2.txt', 'utf-8');

        console.log('2. Files read successfully!')
        return {data, data2};
    }catch(error){
        console.log('Error reading  file', error);
    }
}
