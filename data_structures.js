(function() {
   'use strict';

   /****
    * Private Stack prototype constructor function. Creates a private array to hold all the stack
    * values that is not visible to the outside world, except for the top (array last element) and
    * bottom (array first element) values.
    *
    * @param value {object | array | string | number}, the value to be pushed onto the stack. Can be
    * any data type (even another stack!).
    *
    * @return {object}, contains the push, pop and clean methods as well as the stack top, bottom
    * and size values.
    *
    */
   function Stack() {
      // private array to hold all the stack items.
      var arr = [];
      // private function to update the Stack object property values with the current array values
      function updateArrayValues(obj) {
         obj.size = arr.length;
         obj.top = arr[arr.length - 1];
         obj.bottom = arr[0];
      }
      // returns composite object
      return {
         // Push method, takes @param value and pushes it onto the end of the stack array, passing the Stack object to the function that updates its properties. @param value {Object | array | string | number}, see function comment above. @return {number}, the new size of the stack.
         push : function(value) {
            arr.push(value);
            updateArrayValues(this);
            return this.size;
         },
         // Pop method, takes the top item off the stack by popping it off the end of the stack array, passing the Stack object to the function that updates its properties. @param none. @return {object | array | string | number}, which was previously on top of the stack.
         pop : function() {
            var top = arr.pop();
            updateArrayValues(this);
            return top;
         },
         // Clear method, clears out the stack laving it empty and the top and bottom = undefined and the size = 0. Passes the Stack object to the function that updates its properties. @param none. @return true {boolean} to indicate success.
         clear : function() {
            arr = [];
            updateArrayValues(this);
            return true
         },
         // Size property, the number of items in the stack (supplied by the array length).
         size : arr.length,
         // The item at the top of the stack that will be popped off first.
         top : arr[arr.length - 1],
         // The item at the bottom of the stack that will be the last to be popped off.
         bottom : arr[0]

      };

   };

   /****
    * Private Stack prototype constructor function. Creates a private array to hold all the stack
    * values that is not visible to the outside world, except for the top (array last element) and
    * bottom (array first element) values.
    *
    * @param value {object | array | string | number}, the value to be pushed onto the stack. Can be
    * any data type (even another stack!).
    *
    * @return {object}, contains the push, pop and clean methods as well as the stack top, bottom
    * and size values.
    *
    */
   function Queue() {
      // private array to hold all the queue items.
      var arr = [];
      // private function to update the Queue object property values with the current array values
      function updateArrayValues(obj) {
         obj.size = arr.length;
         obj.first = arr[arr.length - 1];
         obj.last = arr[0];
      }
      // returns composite object
      return {
         // Push method, takes @param value and unshifts it onto the beginning of the queue array, passing the Queue to the function that updates it properties. @param value {Object | array | string | number}, see function comment above. @return {number}, the new size of the stack.
         push : function(value) {
            arr.unshift(value);
            updateArrayValues(this);
            return this.size;
         },
         // Pop method, takes the first item off the queue by popping it off the end of the queue array, passing the Queue object to the function that updates its properties. @param none. @return {object | array | string | number}, which was previously first in the queue.
         pop : function() {
            var next = arr.pop();
            updateArrayValues(this);
            return next
         },
         // Clear method, clears out the queue laving it empty and the first and last items = undefined and the size = 0. Passes the Queue object to the function that updates its properties. @param none. @return true {boolean} to indicate success.
         clear : function() {
            arr = [];
            updateArrayValues(this);
            return true
         },
         // Size property, the number of items in the queue (supplied by the array length).
         size : arr.length,
         // The first item in the queue that will be the first to be popped off.
         first : arr[arr.length - 1],
         // The last item in the queue that will be the last to be popped off.
         last : arr[0]

      };
   }


/****
 * Private LinkedList prototype constructor function. Creates a node object holding the data or
 * payload and a reference to the next node, as well as a separate head (first node) object. These
 * nodes are private, they are not visible to the outside world, except as the tail and head nodes
 * with data (any variable type) and pointer values.
 *
 * @param
 *
 * @return
 */
function LinkedList() {
   var node = {};
   var length = 0

   function updateArrayValues(obj) {
      obj.length = arr.length;
   }

   return {

      append : function(data, nodeAfter) {
         if (nodeAfter === '') {
            // node is new tail
            node.data = data;
            node.next = null;
            length++;
            this.tail.next = node;
         } else {
            node.data = data;
            node.next = nodeAfter;
            length++;
         }

         updateArrayValues(this);
         return arr.length;
      },

      remove : function() {
         return node;
      },

      search : function() {
         return node;
      },

      length : arr.length,

      head : node,

      tail : node

   }
}
/****
 * LinkedList iterator
 */


exports.Stack = Stack;
exports.Queue = Queue;
exports.LinkedList = LinkedList;

}());
