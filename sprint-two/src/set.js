var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
};

setPrototype.contains = function(item){
  if(this._storage.indexOf(item) >= 0) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  delete this._storage[this._storage.indexOf(item)]
  for (var i = 0; i < this._storage.indexOf(item); i++) {
    this._storage[i] = this._storage[i + 1];
  }
  delete this._storage[this._storage.length];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
