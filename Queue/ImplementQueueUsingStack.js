//Question: Implement Queu using stacks
//implement a First in first out queue using only two stacks
//the implement  que should have al the functions of queue (enqueue, dequeue, front and empty)
var myQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
}
myQueue.prototype.enQueue = function (x) {
    this.stack1.push(x);
}
myQueue.prototype.deQueue = function () {
    if(this.stack2.length === 0){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
}
myQueue.prototype.front = function () {
    if(this.stack2.length === 0){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1];
}
myQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
}

var queue = new myQueue();
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);
console.log(queue.stack1, queue.stack2);
queue.deQueue();
console.log(queue.stack1, queue.stack2);
console.log(queue.front());