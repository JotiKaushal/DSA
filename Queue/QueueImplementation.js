//Basic Queue Implementation

class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            return 'Underflow, can not perform dequeue';
        }
        return this.items.shift();
    }

     isEmpty(){
       return this.size() === 0;
     }

     front(){
        if(this.isEmpty()){
            return 'Underflow, can not perform front';
        }
        return this.items[0];
     }

     size(){
        return this.items.length;
     }

     printQueue(){
        let queuestring = '';
        for (let i = 0; i < this.size(); i++) {
            console.log(this.items[i]);
            queuestring += this.items[i] + " | ";
        }
        return 'Queue ' + queuestring;
     }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(2);
console.log(queue.printQueue());
queue.dequeue();
console.log(queue.printQueue());
console.log(queue.front());