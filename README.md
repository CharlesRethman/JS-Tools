# JS-Tools

## JavaScript Tools and modules for inclusion in any project

A bunch of useful tools and modules, such as constructors for data structures, etc. for use in any projects

### File `data_structures.js`
This allows you to creates and use a number of data structures not usually found in JavaScript or Node (check: NPM).
#### Usage
It is usually easiest to copy the file `data_structures.js` to your project folder. Then, to include it in a module, type
```javascript
const ds = require("./data_structure");
```
at the top of your module (you can use `var` instead of `const` if you like and you can call the module variable something else, like `data` or `structure` or `data_structure` if you like).

#### The Stack
A stack is a single-dimension Last-In-First-Out (LIFO) data structure that is used for storing lists of the most recent items, e.g. it can be used for storing the pages navigated on a website (accessed by the `Back` button) or for tracking function calls in some code.

To assign a stack to a variable, set it as a `new` Stack prototype object in `data_structures.js`, using dot notation, e.g.,
```javascript
var foo = new ds.Stack;
```
if you want to see your new stack, type:
```javascript
console.log(foo);
// {  push: [Function],
//    pop: [Function],
//    clear: [Function],
//    size: 0,
//    top: undefined,
//    bottom: undefined }
```
To add an element to the stack:
```javascript
foo.push('Thomson');
```
The stack will return its new size, ie. 1, if this is the first element. Push another element (this time try a number, then an object and then an array):
```javascript
foo.push(65536); // 2
foo.push({ name : 'Thompson', diff: 'with a P' }); // 3
foo.push([1, 2, 3]); // 4
```
You can inspect the stack by looking at its `top`, `next`, `bottom` and `size` properties:
```javascript
var topMost = foo.top // [ 1, 2, 3 ]
var bottomOfThePile = foo.bottom // 'Thomson'
var depthOfStack = foo.size // 4
```
Removing items is easy, just `pop` them:
```javascript
var retriveTopMost = foo.pop();
console.log(retrieveTopMost); // [ 1, 2, 3 ]
console.log(foo.size); // 3
```
To clear the stack out completely, use `clear`:
```javascript
foo.clear();
console.log(foo.top); // undefined
console.log(foo.size); // 0
```

#### Queue
The queue is similar to the stack except that the accessible objects in it are the first objects to be loaded. Hence, it is a First-In-First-Out structure (FIFO). It is handy for storing things that need to remain in the order in which they came, like transctions or lines of code.

To assign a queue to a variable, set it as a `new` Queue prototype object in `data_structures.js`, using dot notation, e.g.,
```javascript
var bar = new ds.Queue;
```
if you want to see the queue, type:
```javascript
console.log(bar);
// {  push: [Function],
//    pop: [Function],
//    clear: [Function],
//    size: 0,
//    first: undefined,
//    last: undefined }
```

To add an element to the queue:
```javascript
bar.push('Thomson');
```
The queue will return its new size, ie. 1, if this is the first element. Push another element (this time an try a number, then an object and then an array):
```javascript
bar.push(65536); // 2
bar.push({ name : 'Thompson', diff: 'with a P' }); // 3
bar.push([1, 2, 3]); // 4
```
You can inspect the stack by looking at its `first`, `next`, `previous`, `last` and `size` properties:
```javascript
var firstInLine = bar.first // 'Thomson'
var stuckAtTheBack = bar.last // [ 1, 2, 3 ]
var lengthOfQueue = bar.size // 4
```
Removing items is easy, just `pop` them:
```javascript
var retriveFirst = bar.pop();
console.log(retrieveFirst); // 'Thomson'
console.log(bar.size); // 3
```
To clear the stack out completely, use `clear`:
```javascript
foo.clear();
console.log(foo.top); // undefined
console.log(foo.size); // 0
```
