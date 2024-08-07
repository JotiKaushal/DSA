var MinStack = function() {
    this.elements = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.elements.push(val);
    if(this.minStack.length === 0){
        val = val;
    }else{
        val = Math.min(val, this.minStack[this.minStack.length -1]);
    }
    this.minStack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.elements.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.elements.length > 0 ? this.elements[this.elements.length -1] : 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.length > 0 ? this.minStack[this.minStack.length -1] : 0;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
 obj.push(5)
 obj.push(3)
 obj.push(-1)
 obj.push(7)
 obj.push(9)
 obj.pop()
 var param_3 = obj.top()
 var param_4 = obj.getMin()

 console.log(param_3, param_4);
 