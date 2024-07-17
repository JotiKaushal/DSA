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

  addAtLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }
    const newNode = new Node(data);
    if(index === 0){
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        const current = current.next;;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop(){
    if(!this.head){
        console.error('List is empty');
        return;
    }
    this.head = this.head.next;
  }

  removeLast(){
    if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
  }
  removeAt(index){
    if (index < 0 || index > this.size()) {
        console.error("Invalid Index");
        return;
      }
      if(index === 0){
          this.head = this.head.next;
          return;
      }
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
           current = current.next;
      }
      if(current.next){
        current.next = current.next.next;
      }
  }

  printLikedList(){
    let current = this.head;
    while(current){
        console.log(current.data);
        current = current.next;
    }
  }
}


const linkedList = new LinkedList();
linkedList.addAtFirst(5);
linkedList.addAtFirst(3);
linkedList.addAtFirst(8);
linkedList.printLikedList();
console.log('add at last');
linkedList.addAtLast(6);
linkedList.printLikedList();
console.log('removeAt 2');
linkedList.removeAt(2);
linkedList.printLikedList();
console.log('removeTop ');
linkedList.removeTop();
linkedList.printLikedList();
console.log('removeLast ');
linkedList.removeLast();
console.log('add at 1');
linkedList.addAt(0, 9);
linkedList.printLikedList();
