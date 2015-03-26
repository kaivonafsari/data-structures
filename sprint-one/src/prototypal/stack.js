var Stack = function() {

  var storage = Object.create(stackMethods);

  return storage;
};


var stackMethods = {};
stackMethods.stackSize = 0;

stackMethods.size = function(){
  return this.stackSize;
};

stackMethods.push = function(value){
  this[this.stackSize] = value;
  this.stackSize++;
}

stackMethods.pop = function(){
  var results = this[this.stackSize-1];
  delete this[this.stackSize-1];
  if (this.stackSize !== 0) {


    this.stackSize--;
  }
  return results;
};


