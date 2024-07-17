/*
Given the head of a sigly linked list, return true if it is a palindrome ot false otherwise
Input head = [1,2,2,1]
output: true
Input head = [3,5,2,1]
output: false
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

const isPalindrome = function(node){
    let string1 = string2 = "";
    while(node != null){
        string1 = `${string1}${node.data}`;
        string2 = `${node.data}${string2}`;
        node = node.next;
    }
    return string1 === string2;
}

let list = new LinkedList();
list.addAtFirst(1);
list.addAtFirst(2);
list.addAtFirst(2);
list.addAtFirst(1);

console.log(isPalindrome(list.head));