var Stack = function() {


};


Stack.prototype.stackSize = 0;

Stack.prototype.size = function(){
  return this.stackSize;
};

Stack.prototype.push = function(value){
  this[this.stackSize] = value;
  this.stackSize++;
}

Stack.prototype.pop = function(){
  var results = this[this.stackSize-1];
  delete this[this.stackSize-1];
  if (this.stackSize !== 0) {


    this.stackSize--;
  }
  return results;
};


