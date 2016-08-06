# JS-Tools

These are JavaScript tools and modules for inclusion in any project. A bunch of useful tools and modules, such as constructors for data structures, etc. for use in any projects

## File `data_structures.js`
This allows you to creates and use a number of data structures not usually found in JavaScript or Node (check: NPM).
### Usage
It is usually easiest to copy the file `data_structures.js` to your project folder. Then, to include it in a module, type
```javascript
const ds = require("./data_structure");
```
at the top of your module (you can use `var` instead of `const` if you like and you can call the module variable something else, like `data` or `structure` or `data_structure` if you like).

### The Stack
A stack is a single-dimension Last-In-First-Out (LIFO) data structure that allows items to be removed starting with the most recently appended and working back to the beginning (think of a stack of books, only the one on top can easily be taken off the pile). It can be used for storing the pages navigated on a website (to be accessed, most recent first, by the `Back` button) or for tracking function calls in some code.

To make a stack object, create a `new` object from the Stack prototype object in `data_structures.js`:
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
var item = foo.push(65536);
console.log(item); // 2
item = foo.push({ name : 'Thompson', diff: 'with a P' });
console.log(item); // 3
item = foo.push([1, 2, 3]);
console.log(item); // 4
```
You can inspect the stack by looking at its `top`, `bottom` and `size` properties:
```javascript
console.log(foo.top); // [ 1, 2, 3 ]
console.log(foo.bottom); // 'Thomson'
console.log(foo.size); // 4
```
Removing items is easy, just `pop` them:
```javascript
var retrieveTopMost = foo.pop();
console.log(retrieveTopMost); // [ 1, 2, 3 ]
console.log(foo.top); // { name : 'Thompson', diff: 'with a P' }
console.log(foo.size); // 3
```
To clear the stack out completely, use `clear`:
```javascript
foo.clear();
console.log(foo.top); // undefined
console.log(foo.size); // 0
```

### Queue
The queue is a single dimension data structure similar to the stack except that the removable item starts with first item that was loaded. Hence, it is a First-In-First-Out structure (FIFO) where items shuffle forward (think of a queue of people at a ticket booth). It is handy for storing things that need to remain in the order in which they came, like transction requests or lines of code.

To make a queue object, create a `new` object from the Queue prototype object in `data_structures.js`:
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
var item = bar.push(65536);
console.log(item); // 2
item = bar.push({ name : 'Thompson', diff: 'with a P' });
console.log(item); // 3
item = bar.push([1, 2, 3]);
console.log(item); // 4
```
You can inspect the stack by looking at its `first`, `last` and `size` properties:
```javascript
console.log(bar.first); // 'Thomson'
console.log(bar.last); // [ 1, 2, 3 ]
console.log(bar.size); // 4
```
Removing items is easy, just `pop` them:
```javascript
var retrieveFirst = bar.pop();
console.log(retrieveFirst); // 'Thomson'
console.log(bar.first) // 65536
console.log(bar.size); // 3
```
To clear the stack out completely, use `clear`:
```javascript
foo.clear();
console.log(foo.top); // undefined
console.log(foo.size); // 0
```

### Linked List

This is still under construction.
