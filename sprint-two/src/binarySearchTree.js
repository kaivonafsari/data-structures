var BinarySearchTree = function(value){
  var obj = Object.create(BinarySearchTree.prototype);

  obj.value = value
  obj.right = null;
  obj.left = null;

  return obj;


};

BinarySearchTree.prototype.insert(value){
  if (!this.left && !this.right) {
    this.left = value;
  }

  if (this.left) {
    this.right = value;
  }



};

BinarySearchTree.prototype.contains(val){
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


/*
 * Complexity: What is the time complexity of the above functions?
 */


{


  value: 8,
  left: {
          value: 3,
          left {  value: 1,
                  left: null,
                  right: null
               },
          right: {



                }


          }


}

if(!this.left && !this.right){

    if(inputNode > this.value){
        this.right = inputNode
    }





}
