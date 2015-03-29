var BinarySearchTree = function(value){
  var obj = Object.create(BinarySearchTree.prototype);

  obj.value = value
  obj.right = null;
  obj.left = null;

  return obj;


};

BinarySearchTree.prototype.insert= function(val){
  if (this.value > val) {
    if (this.left) {
      // left has a lower tree, go down please
    this.left.insert(val);
    } else {
      // no left tree, left is empty
      this.left = BinarySearchTree(val);
    }
  }


  if (this.value < val) {
    if (this.right) {
      this.right.insert(val);
    } else {
      this.right = BinarySearchTree(val);
    }
  }



};

BinarySearchTree.prototype.contains= function(val){
  var answer = false;

  var finder = function(node, val){

    if (node.value === val) {
      answer = true;
    }

    finder(node.left, val);
    finder(node.right, val);



  }

 finder(this, val);

 return answer


};

BinarySearchTree.prototype.depthFirstLog = function(){};


/*
 * Complexity: What is the time complexity of the above functions?
 */





