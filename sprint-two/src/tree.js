var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here

  _.extend = function(obj) {
    for (var i =1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        obj[key] = arguments[i][key]
      }
    }
    return obj;
  }
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target){
  //node = node || this;

  var answer = false;

  var finder = function(node, target){

    if (node.value === target) {
      answer = true;
    }
    else{
      for(var i = 0; i < node.children.length; i++){
      finder(node.children[i], target);
      }
    }
    console.log(answer)
  };
  //node.contains(target,node);
  finder(this,target)
  return answer;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


