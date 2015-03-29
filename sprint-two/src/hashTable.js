var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);


  if(!bucket){
    bucket = [];
    this._storage.set(i,bucket);
  }

  var tuple = [];
  tuple.push(k);
  tuple.push(v);
  bucket.push(tuple);
  // console.log(this._storage.get(i));
  //this._storage[i] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit)
  var bucket = this._storage.get(i);

  if(!bucket){
    return null
  }

  for(var index = 0; index < bucket.length; index++){
    if(bucket[index][0] === k){
      return bucket[index][1];
    }

  }

  return null;




  //First the code gives us i, which is an indentifier for a bucket
    //Check if bucket exits
      //If it doesn't exist return null
      //If bucket exits
        //iterate over bucket, an array of arrays, to find k
        //this will be done by checking the first index of the
        //each tuple in the bucket array
          //if bucket[i][0] === k
            //return bucket[i][1]


};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit)

  var bucket = this._storage.get(i);

  if(!bucket){
    return null
  }

  for(var index = 0; index < bucket.length; index++){
    if(bucket[index][0] === k){
      bucket[index][1] = null;
    }

  }

  return null;

};

//var HashTable Object {get: function, set: function, each: function}







/*
 * Complexity: What is the time complexity of the above functions?
 */
