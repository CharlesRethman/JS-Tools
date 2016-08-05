(function() {
   'use strict';

   /**
    * Private Stack prototype constructor function. Creates a private array to hold all the stack
    * values that is not visible to the outside world, except for the top (array last element) and
    * bottom (array first element) values.
    *
    * @param value {object | array | string | number}. The value to be pushed onto the stack. Can be
    * any data type (even another stack!).
    *
    * @return {object}. Contains the push, pop and clean methods as well as the stack top, bottom
    * and size values.
    *
    */
   function Stack() {
      // private array to hold all the stack items.
      var arr = [];
      // private function to update the Stack object property values withnthe current array values
      function updateArrayValues(obj) {
         obj.size = arr.length;
         obj.top = arr[arr.length - 1];
         obj.bottom = arr[0];
      }
      // returns composite object
      return {
         // Push method, takes value and pushes it onto the end of the stack array, passing the stack to the function have its properties updated. @param value {Object | array | string | number}. See function comment above. @return {number}, The new size of he stack.
         push : function(value) {
            arr.push(value);
            updateArrayValues(this);
            return this.size;
         },
         // Pop method, takes top value off the stack, popping it off the end of the stack array, pasing the stack object to the function to have its properties updated. @param none. @return {object | array | string | number} which was previously on top of the stack.
         pop : function() {
            var top = arr.pop();
            updateArrayValues(this);
            return top;
         },
         // Clear method, clears out the stack laving it empty and the top and bottom undefined and the size 0. Passes the stack object to the function to update its properties. @param none. @return true {boolean} to indicate success.
         clear : function() {
            arr = [];
            updateArrayValues(this);
            return true
         },
         // Size property, the number of items in the stack (supplied by the array length).
         size : arr.length,

         top : arr[arr.length - 1],

         bottom : arr[0]

      };

   };

function Queue() {
   var arr = [];
   function updateArrayValues(obj) {
      obj.size = arr.length;
      obj.first = arr[arr.length - 1];
      obj.next = arr[arr.length - 2];
      obj.previous = arr[1];
      obj.last = arr[0];
   }

   return {

      push : function(value) {
         arr.unshift(value);
         updateArrayValues(this);
         return this.size;
      },

      pop : function(value) {
         var next = arr.pop();
         updateArrayValues(this);
         return next
      },

      clear : function() {
         arr = [];
         updateArrayValues(this);
         return true
      },

      size : arr.length,

      first : arr[arr.length - 1],

      next : arr[arr.length - 2],

      previous : arr[1],

      last : arr[0]

   };
}

/*function LinkedList() {
   var arr = [];
   return {

      append : function(data, node) {
         var obj = {};
         if (node <= 1 || arr == []) {
            obj = { data: data, node: 0 };
         } else if (node > arr.length - 1 || node = '' || isNaN(parseFloat(node)) || !isFinite(node)) {
            obj = { data : data, node : null}
         } else {
            obj = { data : data, node : node}
         }
         arr.push(obj);
         this.length = arr.length
      }

      remove : function() {

      },

      length : arr.length;
   }
};*/

/**
 * Creates a LinkedList from an array.
 */
function LinkedList(arr) {
   console.log(arr);
   var last = null;
   for (var i = 0; i < arr.length; i++) {
      var node = {
         value: arr[i]
      };
      console.log(node);
      if (!last) {
         this.head = node;
      } else {
         last.next = node;
      }
      last = node;
   }
}
/**
 * LinkedList iterator
 */
LinkedList.prototype.iterator = function() {
   var list = this;
   return {
      next: function() {
         if (this.node && !this.node.next) {
            throw new Error('At tail of list!');
         }
         this.node = this.node ? this.node.next : list.head;
         return this.node.value;
      },
      hasNext: function() {
         if (!this.node) return list.head;
         return this.node.next;
      }
   };
};
/**
 * Converts this LinkedList to an array.
 */
LinkedList.prototype.toArray = function() {
   var it = this.iterator();
   var ret = [];
   while (it.hasNext()) {
      ret.push(it.next());
   }
   return ret;
};


exports.Stack = Stack;
exports.Queue = Queue;
exports.LinkedList = LinkedList;

}());
