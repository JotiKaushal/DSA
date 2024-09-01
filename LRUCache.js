/*
Least recently used cache
cache = is local memory where we can store data
LRU cache is of fixed length

check React sandbox app at:
https://codesandbox.io/p/devbox/jotk-lz79x6?file=%2Fsrc%2Fhooks%2FuseLRUCache.ts%3A20%2C1

*/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
     if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
    }
};

var obj = new LRUCache(3);
obj.put(1,1)
obj.put(2,2)
obj.put(3,3)
console.log(obj.cache);
obj.get(2);
console.log(obj.cache);
obj.put(4,4);
console.log(obj.cache);

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */