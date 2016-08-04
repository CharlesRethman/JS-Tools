'Use Strict'

 function Stack() {
   var array = [];

   return {

      push : function(value) {
         array.unshift(value);
         this.size = array.length;
         this.top = array[0];
         this.next = array[1];
         this.previous = array[array.length - 2];
         this.bottom = array[array.length - 1];
   //      console.log(array);
      },

      pop : function(value) {
         var top = array.shift();
         this.size = array.length;
         this.top = array[0];
         this.next = array[1];
         this.previous = array[array.length - 2];
         this.bottom = array[array.length - 1];
   //   console.log(array);
         return top;
      },

      size : array.length,

      top : array[0],

      next : array[1],

      previous : array[array.length - 2],

      bottom : array[array.length - 1]

   }

};

function Queue() {
   var array = [];
   return {

      push : function(value) {
         array.unshift(value);
         this.size = array.length;
         this.first = array[array.length - 1];
         this.next = array[array.length - 2];
         this.previous = array[1];
         this.last = array[0];
      },

      pop : function(value) {
         var next = array.pop();
         this.size = array.length;
         this.first = array[array.length - 1];
         this.next = array[array.length - 2];
         this.previous = array[1];
         this.last = array[0];
         return next
      },

      size : array.length,

      first : array[array.length - 1],

      next : array[array.length - 2],

      previous : array[1],

      last : array[0]

   }
}

function LinkedList() {
   var array = [];
   return {

      append : function(data, position) {
         if (position = '' || isNaN(parseFloat(position)) || !isFinite(position)) then return null
         if position < 0
         var obj = { 'data': data, 'position': position }
         array.push(obj)
      },

      remove : function() {

      },

      length : array.length;
   }
};

/*LinkedList.prototype = {
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
  this.length++;*/
};


exports.stack = new Stack;
exports.queue = new Queue;
