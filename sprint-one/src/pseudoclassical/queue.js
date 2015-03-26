var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

this.qSize = 0;

};


Queue.prototype.size = function(){
  return this.qSize;
};

Queue.prototype.enqueue = function(value){
  this[this.qSize] = value;
  this.qSize++;
};

Queue.prototype.dequeue = function(){
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

