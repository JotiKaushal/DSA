/*
Question: Sliding Widow Maximum
you are given an array of integers nums, there is a sliding window of size k which is
moving from the very left pf the array t the very right. You can only see the k numbers
in the window. Each time the slding window moves right by one position

Input: [1,3,-1,-3,5,3,6,7], k=3
Output: [3,3,5,5,6,7]
*/ 

//Brut force solution
const maxSlidingWindow = function (nums, k) {
 if(nums.length === 0) return 0;
 let result = [];
 let n = nums.length;
 for (let i = 0; i <= n-k; i++) {
    let max = nums[i];
    for (let j = 1; j < k; j++) {
       if(max < nums[i+j]){
        max = nums[i+j]
       }
    }
    result.push(max);
 }
 return result;   
}
//time complexity: o(n2)
//space complexity: o(n)
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));


//optimized solution
const optimizedMaxSlidingWindow = function (nums, k) {
    const result = [];
    const deque = []; //double ended queue with size k, in which element can be removed from both ends

    //iterate thru all items of nums array
    for (let i = 0; i < nums.length; i++) {
          //remove first item from deque if deque size limit is reached
         while (deque.length > 0 && deque[0] <= i-k) {
            deque.shift();
         }
        //remove last item from deque if it is smaller then current array value
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
             deque.pop();            
        }

        deque.push(i);

        if(i >= k-1){
            result.push(nums[deque[0]]);
        }
    }
    return result;
     
}
//time complexity: o(n)
//space complexity: o(n)
console.log(optimizedMaxSlidingWindow([1,3,-1,-3,5,3,6,7],3));