var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  var catchBox = []


  list.addToTail = function(value){
    var node = Node(value);

    if (list.head === null){
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var result = list.head.value;
    var newHead = list.head.next;
    delete list.head.value;
    list.head = newHead;
    return result;

  };

  list.contains = function(target){
    var answer = false;



    var looker = function(node, target){

    //Base case: when the object doesn't have a next property
      if (node.next === null ) {
        if(node.value === target){
          answer = true
        }
        else{
          return answer
        }
      }
    //Recursive case: check if value in node is equal to target
        //If value is equal to target ===> return true
        //Else keep going with recursion and dont give up
      if(node.value === target){
        answer = true

      }


      else{
         node = node.next;
         looker(node, target);
      }



    };
    looker(list.head,target)
    return answer


  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
