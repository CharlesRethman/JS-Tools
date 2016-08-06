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
   var firstNode = -1;
   var arr = [];

   function updateArrayValues(obj) {
      obj.length = arr.length;
      obj.head = { data : (arr.length > 0 ? arr[firstNode].data : null), next : (arr.length > 0 ? arr[firstNode].next : null) };
   }

   function insert(data, index) {
      var node = { data : null, next : null };
      if (index < 0) {
         // node is new head
         node.data = data;
         node.next = firstNode;
         arr.push(node);
         firstNode = arr.length - 1;
      } else if (index < arr.length - 1) {
         // node is somewhere in the middle of the list
//         console.log('index is ', index);
//         console.log(arr[index], { data : 'hello' , next : -1 });
         node.data = data;
         node.next = arr[index].next;
//         console.log(node);
         arr.push(node)
//         console.log(arr[index].next);
         arr[index].next = arr.length - 1;
//         console.log(arr[index].next);
      } else {
         //node is at the end of the list
         node.data = data;
         node.next = arr[arr.length - 1].next;
         arr.push(node);
         arr[arr.length - 2].next = arr.length -1;
      }
   }

   function findData (element, index, array) {
      return element.data === this.toString();
   }

   return {

      insertAfterIndex : function(data, afterNode) {
//         console.log('Test = ' + (afterNode == '' || isNaN(parseFloat(afterNode))));
         if (afterNode === '' || isNaN(parseFloat(afterNode)) || afterNode < 0) {
            insert(data, -1)
         } else {
            insert(data, afterNode)
         }
         updateArrayValues(this);
//         console.log(arr, firstNode);
         return arr.length;
      },

      insertAfterData : function(data, afterNode) {
         var node = { data : null, next : null };
//         console.log(afterNode, arr.findIndex(findData, afterNode));
         if (arr.findIndex(findData, afterNode) === -1) {
            // node is new head
            insert(data, -1);
         } else {
            // node is further down
            insert(data, arr.findIndex(findData, afterNode));
         }
         updateArrayValues(this);
//         console.log(arr, firstNode);
         return arr.length;
      },

      remove : function() {
         return node;
      },

      search : function() {
         return node;
      },

      length : arr.length,

      head : { data : (arr.length > 0 ? arr[firstNode].data : null), next : (arr.length > 0 ? arr[firstNode].next : null) }

   }
}
/****
 * LinkedList iterator
 */


exports.Stack = Stack;
exports.Queue = Queue;
exports.LinkedList = LinkedList;

}());
