/*
You are given two non empty linked lists representing two non negative integers.
The digits are stored in reverse order and each of their nnodes contain a single 
digit. Add the two numbers and return the sum of linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 
itself
*/

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

const addTwoNumbers = (l1, l2) => {
  let dummy = new LinkedList();
  dummy.head = new Node(0);
  let current = dummy.head;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    let val1 = l1 ? l1.data : 0;
    let val2 = l2 ? l2.data : 0;

    var sum = val1 + val2 + carry;
    carry = Math.floor(sum/10);
    sum %= 10;
    current.next = new Node(sum);
    current = current.next;

    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
 return dummy.head.next;
}

let l1 = new LinkedList();
l1.addAtFirst(3);
l1.addAtFirst(4);
l1.addAtFirst(2);

let l2 = new LinkedList();
l2.addAtFirst(4);
l2.addAtFirst(6);
l2.addAtFirst(5);


console.log(addTwoNumbers(l1.head, l2.head));
