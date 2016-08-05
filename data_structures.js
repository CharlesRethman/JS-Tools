'use strict';

function Stack() {
   var arr = [];

   function updateArrayValues(obj) {
      obj.size = arr.length;
      obj.top = arr[arr.length - 1];
//      obj.next = arr[arr.length - 2];
      obj.bottom = arr[0];
   }

   return {

      push : function(value) {
         arr.push(value);
         updateArrayValues(this);
         return this.size;
      },

      pop : function(value) {
         var top = arr.pop();
         updateArrayValues(this);
         return top;
      },

      clear : function() {
         arr = [];
         updateArrayValues(this);
         return true
      },

      size : arr.length,

      top : arr[arr.length - 1],

//      next : arr[arr.length - 2],

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


function LinkedList() {}
LinkedList.prototype = {
  length: 0,
  first: null,
  last: null
};

LinkedList.Circular = function() {};
LinkedList.Circular.prototype = new LinkedList();

LinkedList.Circular.prototype.append = function(node) {
  if (this.first === null) {
    node.prev = node;
    node.next = node;
    this.first = node;
    this.last = node;
  } else {
    node.prev = this.last;
    node.next = this.first;
    this.first.prev = node;
    this.last.next = node;
    this.last = node;
  }
  this.length++;
};

LinkedList.Circular.prototype.insertAfter = function(node, newNode) {
  newNode.prev = node;
  newNode.next = node.next;
  node.next.prev = newNode;
  node.next = newNode;
  if (newNode.prev == this.last) { this.last = newNode; }
  this.length++;
};

LinkedList.Circular.prototype.remove = function(node) {
  if (this.length > 1) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    if (node == this.first) { this.first = node.next; }
    if (node == this.last) { this.last = node.prev; }
  } else {
    this.first = null;
    this.last = null;
  }
  node.prev = null;
  node.next = null;
  this.length--;
};


exports.stack = new Stack;
exports.queue = new Queue;
exports.linkedList = new LinkedList;
exports.linkedListCircular = new LinkedList.Circular;
