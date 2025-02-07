//Question: Implement stack using queue
//Implement a last-in-first-out(LIFO) stack using only two queuus
//The implement should support all stack method (push, pop, top & empty)

var myStack = function () {
    this.q1 =[];
    this.q2 = [];
    this.hitQ=[];
}
myStack.hit =(timestamp)=>{
this.hitQ.push(timestamp);
}

myStack.getHit=(timestamp)=>{
while(timestamp - this.hitQ[0] >= 300){
    this.hitQ.shift();
}
return this.hitQ.length;
}

myStack.prototype.push = function (element) {
    while (this.q1.length !== 0) {
        this.q2.push(this.q1.shift());
    }
    this.q1.push(element);
    while (this.q2.length !== 0) {
        this.q1.push(this.q2.shift());
    }
}
myStack.prototype.pop = function () {
return this.q1.shift();
}
myStack.prototype.top = function () {
  return  this.q1[0];
}
myStack.prototype.isEmpty = function () {
    return this.q1.length === 0;
}

var stack = new myStack();
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack.q1);
console.log(stack.top());
stack.pop();
console.log(stack.top());