// Import fs (File System) using require;

const fs  = require('fs');

console.log('1. Start File reading Synchronously...')

const data = fs.readFileSync('mytext.txt','utf-8');

console.log('2. File Content: - ', data);

console.log('3. File reading done successfully you able to find the content of file above.');


    /**
    const fs = require('fs'); — Imports Node.js's built-in file system module, giving access to file operations.

    console.log('1. Start File reading Synchronously...'); — Prints a message to the console, marking the start of the operation.

    const data = fs.readFileSync('myfile.txt', 'utf8'); — This is the key line. It reads the file named myfile.txt synchronously, meaning the program pauses here and waits until the file is fully read before moving on. The 'utf8' argument specifies the file encoding, so the result is a readable text string rather than raw binary data. The file's content is stored in the variable data.

    console.log('2. File contents:', data); — Prints the actual content of the file to the console.

    console.log('3. File reading done successfully you able to find the content of file above.'); — Prints a completion message.
    */
