const fs = require('fs').promises;

async function readFile(){
    try{
        const data = await fs.readFile('mytext.txt', 'utf-8');

        console.log(`Data is:- ${data}`);

    } catch(err){
        console.error('Error Reading File: ', err);
    }
}

readFile();