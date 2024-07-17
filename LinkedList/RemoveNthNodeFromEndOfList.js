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
}


var removeNthNodeFromEndOfList = function (head, n) {
    let slow = head;
    let fast = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if(!fast){
        return head.next;
    }

    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return head;
}
let list = new LinkedList();
list.addAtFirst(1);
list.addAtFirst(2);
list.addAtFirst(2);
list.addAtFirst(1);
console.log(removeNthNodeFromEndOfList(list.head, 2));