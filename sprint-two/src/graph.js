// TO DO: Refactor for looping into a method

var Graph = function(){
  this.table = [];


};


Graph.prototype.addNode = function(node){
  var nNode = []
  nNode.push(node);
  nNode.push([]);

  this.table.push(nNode)
};

Graph.prototype.contains = function(node){
  var answer = false
  for (var i = 0; i <= this.table.length-1; i++) {
    if(this.table[i] !== undefined) {
      if (this.table[i][0] === node){
        answer = true;
      }
    }
  }
  return answer;
};

Graph.prototype.removeNode = function(node){
  for (var i =0; i <= this.table.length-1; i++) {
    if(this.table[i] !== undefined) {
      if (this.table[i][0] === node) {
        delete this.table[i];
      }
    }
  }

};

Graph.prototype.hasEdge = function(fromNode, toNode){
 if (this.table[i][1].indexOf(toNode) >= 0) {
  return true;
 }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var fromIndex, toIndex;
  for (var i =0; i <= this.table.length-1; i++) {
    if(this.table[i] !== undefined) {
      if (this.table[i][0] === fromNode) {
        fromIndex = i;
      }

      if (this.table[i][0] === toNode) {
        toIndex = i;
      }
    }
  }

  this.table[fromIndex][1].push(toNode);
  this.table[toIndex][1].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



