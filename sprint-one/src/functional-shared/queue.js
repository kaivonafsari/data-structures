var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var storage = {};
_.extend(storage, queueMethods);
storage.qSize = 0;
return storage;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.qSize;
};

queueMethods.enqueue = function(value){
  this[this.qSize] = value;
  this.qSize++;
};

queueMethods.dequeue = function(){
  if (this.qSize > 0){
    this.qSize--;
    var result = this[0]

    for (var i =0; i < this.qSize; i++) {
      this[i] = this[i+1];
    }
    delete this[this.qSize];
    return result;
  }
};





