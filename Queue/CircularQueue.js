//Question: Circular queue implementation
// design your implmentaion of the circular queue. The circulat queue is a linear data structure in which the operations are perfomred based on First In First
// out principle, and the last position is connection back to the first position to make a circle.

//initially front n rear is samr
//when adding new element, rear change
//circular queue has fixed size, not case in normal queue

//Below is functional based implementaion
var myCircularQueue = function (k) { //k= size of queue
    this.queue = [];
    this.size = k;

}

//polyfills
myCircularQueue.prototype.enQueue = function (value) {
    if(this.isFull()) return false;
    this.queue.push(value);
    return true;
}

myCircularQueue.prototype.deQueue = function () {
    if(this.queue.length === 0) return false;
     this.queue.shift();
    return true;
}

myCircularQueue.prototype.Front = function () {
    if(this.queue.length === 0) return -1;
    return this.queue[0];
}

myCircularQueue.prototype.Rear = function () {
    if(this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1];
}

myCircularQueue.prototype.isEmpty = function () {
    return this.queue.length === 0;
}

myCircularQueue.prototype.isFull = function () {
    return this.queue.length === this.size;
}

var obj = new myCircularQueue(3);
obj.enQueue(3);
console.log(obj.Front(), obj.Rear());
obj.enQueue(4);
console.log(obj.Front(), obj.Rear());
obj.enQueue(5);
console.log(obj.Front(), obj.Rear());
obj.enQueue(6);
console.log(obj.Front(), obj.Rear());
obj.deQueue();
obj.enQueue(45);