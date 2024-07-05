//basic stack implementation

class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "stack is empty, can not perform pop";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "stack is empty, can not perform peek";
    }
    return this.stack[this.size() - 1];
  }
  size() {
    return this.stack.length;
  }

  printStack() {
   if(this.stack.length !== 0) 
   {
    const x = this.peek();
    console.log(x);
    this.pop();
    this.printStack();
    this.push(x);
    }
  return '';
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack.printStack());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.pop());
