# NodeJs
# Node.js is a free, open source tool that lets you run JavaScript outside the web browser. With Node.js, you can build fast and scalable applications like web servers, APIs, tools, and more.

# What can you build with Node.js ?
 # --> Node.js uses an event-driven, non-blocking model.
 # It can handle many connection at once without waiting for one to finish before strat another.
 # This make great for real-time app and high traffic websites.
 # Here are some example of what you build with Node.js:
 # 1. Web Server and Websites.
 # 2. REST APIs.
 # 3. Real-Time App (like chat).
 # 4. Command Line tools
 # 5. Working with file and Database.
 # 6. IoT and hardware control.


# How to Run Node.js Code: ->> Save your code in a file, for example app.js, then run it in your terminal or command prompt with: node app.js
 
 # What is npm? --> npm is the package manager for Node.js. It helps you install and manage third-party packages (libraries) to add more features to your apps.

 # JavaScript Fundamentals
Before starting with Node.js, you should be familiar with these JavaScript concepts:

Variables
Functions
Objects
Arrays
Asynchronous programming (callbacks, promises, async/await)
ES6+ features
This page will give short examples of essential JavaScript concepts needed for Node.js development.

# Destructuring & Template Literals (ES6+)

const { name } = user;
console.log(`Hello, ${name}!`);

# Key JavaScript Concept`s
# Variables: let (mutable), const (immutable), var (legacy)
# Functions: Regular, arrow functions, and methods
# Objects & Arrays: Data structures for organizing data
# Modules: require() (CommonJS) and import/export (ES6)
# Error Handling: try/catch blocks

# Key Differences
# Node.js and browsers both run JavaScript, but they have different environments and capabilities.

# Node.js is designed for server-side development, while browsers are for client-side applications.

# APIs: Node.js provides APIs for file system, networking, and OS, which browsers do not.
# Browsers provide DOM, fetch, and UI APIs not available in Node.js.
# Global Objects: Node.js uses global; browsers use window or self.
# Modules: Node.js uses CommonJS (require) and ES modules (import); browsers use ES modules or plain <script> tags.
# Security: Browsers run in a sandbox with limited access; Node.js has full access to the file system and network.
# Event Loop: Both environments use an event loop, but Node.js has additional APIs for timers, process, etc.
# Environment Variables: Node.js can access environment variables (process.env); browsers cannot.
# Package Management: Node.js uses npm/yarn; browsers use CDNs or bundlers.

# Asynchronous JavaScript:-

# 1. Callbacks (Traditional)
js

function fetchData(callback) {
  setTimeout(() => {
    callback('Data received!');
  }, 1000);
}

"fetchData" takes a callback function as a parameter.
After a 1-second delay (setTimeout), it calls the callback with the result.
Problem: Nesting multiple callbacks leads to "callback hell" — deeply indented, hard-to-read code.

# 2. Promises (ES6+)
js
const fetchDataPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Promise resolved!'), 1000);
  });
};
Returns a Promise object instead of accepting a callback.
When the async work finishes, resolve is called with the result.
The caller attaches .then() to handle the result, which chains cleanly and avoids nesting.

# 3. Async/Await (ES8+)
js
async function getData() {
  const result = await fetchDataPromise();
  console.log(result);
}

getData();
Syntactic sugar over Promises — makes async code look synchronous.
await pauses execution inside the async function until the Promise resolves.
Much more readable than callbacks or .then() chains, especially for complex sequences

# In short: Callbacks are the old way → Promises improved chaining → Async/Await makes it read like normal sequential code. Modern JavaScript almost always uses async/await for readability.

# These two features—**Destructuring** and **Template Literals**—were introduced in ES6 (JavaScript 2015) to make working with objects and strings cleaner and far easier to read.

Here is a simple breakdown of what is happening in those two lines of code:

---

## 1. Object Destructuring

`const { name } = user;`

Destructuring is a shortcut for extracting properties from an object (or values from an array) and assigning them directly to variables with matching names.

* **Without Destructuring (Older JavaScript):**
```javascript
const name = user.name;

```


* **With Destructuring (ES6+):**
```javascript
const { name } = user;

```



**How it works:** JavaScript looks inside the `user` object for a property called `name`. It creates a brand-new variable named `name` and fills it with that property's value.

> **Bonus Tip:** You can pull multiple properties at once in a single line:
> ```javascript
> const { name, age, email } = user;

---

## 2. Template Literals

`console.log(\`Hello, ${name}!`);`

Template literals are strings wrapped in **backticks** (```) instead of standard single (`'`) or double (`"`) quotes. They allow you to insert variables or expressions directly inside the text without cumbersome string concatenation.

* **Without Template Literals (Older JavaScript):**
```javascript
console.log("Hello, " + name + "!");

```


* **With Template Literals (ES6+):**
```javascript
console.log(`Hello, ${name}!`);

```



**How it works:** The `${...}` syntax acts as a placeholder. Whatever you put inside the curly braces is evaluated as a JavaScript expression and converted into text seamlessly.

---

### Putting It All Together

Suppose you have this `user` object:

```javascript
const user = {
  name: "Alex",
  role: "Developer"
};

// 1. Unpack the name property
const { name } = user;

// 2. Insert the unpacked variable into the string
console.log(`Hello, ${name}!`); 
// Output: Hello, Alex!

```

# 1. Variables
let: Block-scoped variable that can be reassigned (mutable).

const: Block-scoped variable that cannot be reassigned (immutable reference).

var: Legacy function-scoped variable that allows re-declaration and is hoisted. Avoid in modern JS.

# 2. Functions
Regular Functions: Defined with function fn() {}. Standard function with its own this binding.

Arrow Functions: Defined with () => {}. Concise syntax with a lexically inherited this (doesn't bind its own this).

Methods: Functions defined inside an object as properties (e.g., user.sayHi()).

# 3. Objects & Arrays
Objects: Key-value collections for structured data (e.g., { name: "Alice", age: 25 }).

Arrays: Ordered lists of items, accessed by zero-based index (e.g., [1, 2, 3]).

# 4. Modules
CommonJS: Node.js traditional module system using require('./module') and module.exports.

ES6 Modules: Modern standard using import { x } from './module' and export const x.

# 5. Error Handling
try / catch: Executes code inside try {}, and if a runtime error occurs, immediately jumps to catch (error) {} to handle it gracefully without crashing the app.


# Basic Node.js Commands
These are the most common commands you'll use when working with Node.js applications:

# Run a JavaScript file
# node app.js

# Run with additional arguments
# node app.js arg1 arg2

# Run in watch mode (restarts on file changes)
# node --watch app.js

# Debugging Node.js Applications
 >> Node.js includes a powerful debugging system that integrates with Chrome DevTools:
 # Basic Debugging Commands

 # Start with inspector (listens on default port 9229)
node --inspect app.js

# Break on first line of application
node --inspect-brk app.js

# Specify a custom port
node --inspect=9222 app.js

# Enable remote debugging (be careful with this in production)
node --inspect=0.0.0.0:9229 app.js

# Common CLI Tools
Node.js comes with several useful command-line tools:

# Node Version Manager (nvm)

# Install and use different Node.js versions
# nvm install 18.16.0 # Install specific version
# nvm use 18.16.0 # Switch to version
# nvm ls # List installed versions#

# npm (Node Package Manager)

# Common npm commands
# npm init # Initialize a new project
# npm install # Install dependencies
# npm update # Update packages
# npm audit # Check for vulnerabilities

# Common Command Line Flags
`Node.js provides several command-line flags to control its behavior. Here are some of the most useful ones:`
# Basic Flags

# Show Node.js version
node --version # or -v

# Show V8 version
node --v8-options

# Show command-line help
node --help

# Runtime Behavior

# Check syntax without executing
node --check app.js

# Show stack traces for warnings
node --trace-warnings app.js

# Set max memory (in MB)
node --max-old-space-size=4096 app.js

# Preload a module before execution
node --require dotenv/config app.js

# Performance and Optimization

# Enable ES module loader
node --experimental-modules app.mjs

# Enable experimental features
node --experimental-repl-await

# Enable experimental worker threads
node --experimental-worker

# What is the V8 Engine?

` The V8 engine is Google's open-source JavaScript engine, used by Chrome and Node.js. It compiles JavaScript to native machine code for fast execution.`

# Origin: Developed by Google for Chrome in 2008
# Integration: Node.js uses V8 to provide JavaScript runtime on the server
# Features: Just-In-Time compilation, efficient garbage collection, ES6+ support

# Why V8 Makes Node.js Fast
# Just-In-Time (JIT) Compilation: Converts JavaScript into optimized machine code instead of interpreting it
# Hidden Classes: Optimizes property access on JavaScript objects
# Efficient Garbage Collection: Manages memory to prevent leaks and optimize performance
# Inline Caching: Speeds up property access by remembering where to find object properties

**********************************************************************************************

# Node.js Architecture:
**********************

# What is Node.js Architecture?

# Node.js uses a "single-threaded, event-driven" architecture that is designed to handle many connectton at once, efficiently and without blocking the main thread. This makes Node.js ideal for building sclable network applications, real-time app and APIs.

# Key Characteristics: Non-blocking I/O, event-driven, single-threaded with event loop, asynchronous execution

# Asynchronous Means:
********************

# Asynchronous Execution (असिंक्रोनस एग्जीक्यूशन) का आसान भाषा में मतलब है — "किसी एक काम के खत्म होने का इंतज़ार किए बिना अगला काम शुरू कर देना।"

# इसे समझने के लिए प्रोग्रामिंग की दो मुख्य तकनीकों (Synchronous और Asynchronous) की तुलना करते हैं:

# Difference between Synchronous VS Asynchronous

# Synchronous (ब्लॉकिंग): 1.काम करने का तरीका:- एक समय पर एक ही काम। अगला काम तब तक रुका रहेगा जब तक पहला पूरा न हो जाए।, 2. स्पीड:- धीमी (यदि कोई काम समय लेता है, तो पूरा सिस्टम रुक जाता है)।, 3. उपयोग - छोटे और सीधे कैलकुलेशन में।

# Asynchronous (नॉन-ब्लॉकिंग): 1. काम करने का तरीका - एक काम बैकग्राउंड में चलता रहता है और प्रोग्राम तुरंत अगले काम पर बढ़ जाता है।, 2. स्पीड:- तेज़ और कुशल (सिस्टम कभी खाली बैठकर इंतज़ार नहीं करता)।, 3. उपयोग:- API कॉल, डेटाबेस क्वेरी, फाइल डाउनलोड, या नेटवर्क रिक्वेस्ट में।

# Node.js Architecture Diagram
******************************
# 1. Client Request Phase:- Clients send requests to the Node.js server. Each request is added to the Event Queue
# 2. Event Loop Phase:- The Event Loop continuously checks the Event Queue. Picks up requests one by one in a loop
# 3. Request Processing:- Simple (non-blocking) tasks are handled immediately by the main thread. Complex/blocking tasks are offloaded to the Thread Pool
# 4. Response Phase:- When blocking tasks complete, their callbacks are placed in the Callback Queue. Event Loop processes callbacks and sends responses#

# Node.js Asynchronous Programming
**********************************
# What is Asynchronous Programming?
# Ans:-In Node.js, asynchronous operations let your program do other work while waiting for tasks like file I/O or network requests to complete. This non-blocking approach enables Node.js to handle thousands of concurrent connections efficiently.

# Ans- Node.js में, एसिंक्रोनस ऑपरेशन्स आपके प्रोग्राम को फ़ाइल I/O या नेटवर्क रिक्वेस्ट जैसे टास्क के पूरा होने का इंतज़ार करते हुए दूसरे काम करने की सुविधा देते हैं। यह नॉन-ब्लॉकिंग तरीका Node.js को एक साथ हज़ारों कनेक्शन्स को कुशलतापूर्वक संभालने में सक्षम बनाता है।

# Sync vs Async: Key Differences
********************************

# Synchronous:
# 1. Blocks execution until complete
# 2. Simple to understand
# 3. Can cause delays
# 4. Uses functions like `readFileSync()`

# Asynchronous:
***************
# 1. Non-blocking execution
# 2. Better performance
# 3. More complex to handle
# 4. Uses callbacks, promises, or async/await

/*
  const fs = require('fs');

  console.log('1. Starting sync read...');
  const data = fs.readFileSync('myfile.txt', 'utf8');
  console.log('2. File contents:', data);
  console.log('3. Done reading file');
*/

Explanation of above code:- const fs = require('fs'); — Imports Node.js's built-in file system module, giving access to file operations.

console.log('1. Starting sync read...'); — Prints a message to the console, marking the start of the operation.

const data = fs.readFileSync('myfile.txt', 'utf8'); — This is the key line. It reads the file named myfile.txt synchronously, meaning the program pauses here and waits until the file is fully read before moving on. The 'utf8' argument specifies the file encoding, so the result is a readable text string rather than raw binary data. The file's content is stored in the variable data.

console.log('2. File contents:', data); — Prints the actual content of the file to the console.

console.log('3. Done reading file'); — Prints a completion message.


# Avoiding Callback Hell
************************

# Problem: Nested Callbacks (Callback Hell)
getUser(userId, (err, user) => {
  if (err) return handleError(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);
    processOrders(orders, (err) => {
      if (err) return handleError(err);
      console.log('All done!');
    });
  });
});

# Explanation of above code deeply:- 
# This classic JavaScript pattern shows asynchronous code using callbacks. In Node.js or older JavaScript, this specific deeply nested structure is affectionately known as "Callback Hell" or the "Pyramid of Doom."

# Here is a breakdown of what the code is doing step-by-step, followed by why it's written this way and how modern JS fixes it.

Code Breakdown
# getUser(userId, (err, user) => { ... })

It calls getUser to fetch user data asynchronously (e.g., from a database).

JavaScript doesn't wait for the data immediately—it passes a callback function (err, user) that gets executed once the fetching is done.

If an error occurs during fetching (if (err)), it runs handleError(err) and stops execution (return).

# getOrders(user.id, (err, orders) => { ... })

Once the user is successfully found, it uses user.id to fetch that user's order history.

Just like before, if getOrders fails, it returns early and calls handleError(err).

# processOrders(orders, (err) => { ... })

Once the orders are retrieved, it passes them into processOrders.

If processing fails, it returns early and handles the error.

# console.log('All done!')

If all three operations succeed sequentially without throwing an error, it prints "All done!" to the console.

# The Problem: "Callback Hell" :- Notice how each asynchronous operation depends on the previous one. To force them to run sequentially, each step is nested inside the callback of the previous step. Hard to read: As you add more steps, the code keeps drifting to the right ) }); (the Pyramid of Doom). Repetitive error handling: Every single level requires if (err) return handleError(err);.

# How modern JavaScript fixes this
# In modern JavaScript (ES6+), this exact logic is rewritten using async/await, which makes asynchronous code look clean and top-to-bottom like synchronous code:

try {
  const user = await getUser(userId);
  const orders = await getOrders(user.id);
  await processOrders(orders);
  
  console.log('All done!');
} catch (err) {
  handleError(err);
}

# Notice how much easier that is to follow: all errors route to a single catch block, and there is zero deep nesting.

# Solution: Use Promises
************************

getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => processOrders(orders))
  .then(() => console.log('All done!'))
  .catch(handleError);

# Even Better: Async/Await
**************************

async function processUser(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    await processOrders(orders);
    console.log('All done!');
  } catch (err) {
    handleError(err);
  }
}

# Why Use Asynchronous Code?
# Ans:- Asynchronous code lets Node.js handle many requests at once, without waiting for slow operations like file or database access.This makes Node.js great for servers and real-time apps.

# Asynchronous Programming in Node.js
# 1. Node.js uses an event loop for non-blocking I/O
# 2. Modern async code uses async/await with Promises
# 3. Always handle errors in async operations
# 4. Use Promise.all for parallel operations
# 5. Avoid callback hell with proper async patterns


# Node.js Promises
******************

# Introduction to Promises
# Promises in Node.js provide a cleaner way to handle asynchronous operations compared to traditional callbacks. Promises represent the completion (or failure) of an asynchronous operation and its result.

# Promise States
# 1. Pending: Initial state, operation not completed
# 2. Fulfilled: Operation completed successfully
# 3. Rejected: Operation failed
# Once a promise is settled (either fulfilled or rejected), its state cannot change.


# Key Advantages:
# 1. Flatter code structure (avoids callback hell)
# 2. Better error handling with single .catch()
# 3. Easier to compose and chain operations
# 4. Built-in support for parallel operations

# Creating and Using Promises:
# Promises can be created using the Promise constructor, which accepts an executor function with two parameters: `resolve` and `reject`.

const myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
      const success = Math.random() > 0.5;
      if(success){
        resolve('Operation Successfully ');
      } else {
        reject(new Error('Operation Failed!'));
      }
  }, 1000)
  
});

# Using Promise
***************

myPromise.then(result => console.log('Success: ', result)).catch(error => console.log('Error ', error.message));


# Promise Chaining:
******************
# Ans:- Promises can be chained to execute asynchronous operations in sequence, with each .then() receiving the result of the previous operation.

# एसिंक्रोनस ऑपरेशन्स को क्रम में चलाने के लिए प्रॉमिसेज़ को एक-दूसरे से जोड़ा जा सकता है, जहाँ हर .then() को पिछले ऑपरेशन का रिज़ल्ट मिलता है।