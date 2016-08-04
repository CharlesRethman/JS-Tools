'Use Strict'

 function Stack() {
   var array = [];

   function updateArrayValues(obj) {
      obj.size = array.length;
      obj.top = array[array.length - 1];
      obj.next = array[array.length - 2];
      obj.bottom = array[0];
   }

   return {

      push : function(value) {
         array.push(value);
         updateArrayValues(this);
         return this.size;
      },

      pop : function(value) {
         var top = array.pop();
         updateArrayValues(this);
         return top;
      },

      clear : function() {
         array = [];
         updateArrayValues(this);
         return true
      },

      size : array.length,

      top : array[array.length - 1],

      next : array[array.length - 2],

      bottom : array[0]

   };

};

function Queue() {
   var array = [];
   function updateArrayValues(obj) {
      obj.size = array.length;
      obj.first = array[array.length - 1];
      obj.next = array[array.length - 2];
      obj.previous = array[1];
      obj.last = array[0];
   }

   return {

      push : function(value) {
         array.unshift(value);
         updateArrayValues(this);
         return this.size;
      },

      pop : function(value) {
         var next = array.pop();
         updateArrayValues(this);
         return next
      },

      clear : function() {
         array = [];
         updateArrayValues(this);
         return true
      },

      size : array.length,

      first : array[array.length - 1],

      next : array[array.length - 2],

      previous : array[1],

      last : array[0]

   };
}

/*function LinkedList() {
   var array = [];
   return {

      append : function(data, node) {
         var obj = {};
         if (node <= 1 || array == []) {
            obj = { data: data, node: 0 };
         } else if (node > array.length - 1 || node = '' || isNaN(parseFloat(node)) || !isFinite(node)) {
            obj = { data : data, node : null}
         } else {
            obj = { data : data, node : node}
         }
         array.push(obj);
         this.length = array.length
      }

      remove : function() {

      },

      length : array.length;
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
