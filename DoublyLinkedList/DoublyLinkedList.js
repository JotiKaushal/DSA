class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    if (this.head) this.head.prev = newNode;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    newNode.prev = current;
    current.next = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }

  addAt(data, index) {
    if (index < 0 || index > this.size()) console.log("Invalid Index");
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      if (this.head) this.head.prev = newNode;
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    newNode.prev = current;
    newNode.next = current.next;
    if (current.next) {
      current.next.prev = newNode;
    }
    current.next = newNode;
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) console.log("Invalid Index");
    if (index === 0) {
        if(!this.head) return;
        this.head = this.head.next;
        if(this.head) this.head.prev = null;
        return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      if(current.next){
        current.next.prev = current;
      }
    }
  }


  removeFirst(){
    if(!this.head) return;
    this.head = this.head.next;
    if(this.head) this.head.prev = null;
  }

  removeLast(){
    if(!this.head) return;
    if(!this.head.next) {
        this.head = null;
        return;
    }
    let current = this.head;
    while(current.next.next){
        current = current.next;
    }
    current.next = null;
  }

  printDoublyLinklist(){
    let current = this.head;
    while(current.next){
        console.log(current.data);
        current = current.next;
    }
  }
}


const linkedList = new DoublyLinkedList();
linkedList.addFirst(5);
linkedList.addFirst(3);
linkedList.addFirst(8);
linkedList.printDoublyLinklist();
console.log('add at last');
linkedList.addLast(6);
linkedList.printDoublyLinklist();
console.log('removeAt 2');
linkedList.removeAt(2);
linkedList.printDoublyLinklist();
console.log('removeFirst ');
linkedList.removeFirst();
linkedList.printDoublyLinklist();
console.log('removeLast ');
linkedList.removeLast();
console.log('add at 1');
linkedList.addAt(9, 0);
linkedList.printDoublyLinklist();