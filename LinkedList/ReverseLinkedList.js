class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    addAtFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
      }
      printLikedList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
      }
}

const reverseList = function(node){
    let prev = null;
    let current = node;
    while(current != null){
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

let list = new LinkedList();
list.addAtFirst(1);
list.addAtFirst(2);
list.addAtFirst(3);
list.addAtFirst(4);
list.printLikedList();
console.log(reverseList(list.head));
