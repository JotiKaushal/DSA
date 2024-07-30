// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

const productOfArrayExceptSelf = (nums) => {
//create a pre table which will have product of all previous items except self
const pre = [];
for (let i = 0; i < nums.length; i++) {
   if(nums[i-1] === undefined){
    pre[i] = nums[i];
   }
   else{
    pre[i] = pre[i-1]*nums[i]
   }
}
//after above loop prev array will be
//[ 1, 2, 6, 24 ]
//console.log(pre);

//instead of creating post array will use post variable
let post = 1;

for (let i = nums.length-1; i >=0; i--) {
    if(nums[i+1] === undefined){
        pre[i] = pre[i-1];
        post = nums[i];
    }else{
        pre[i] = (pre[i-1]  === undefined ? 1 : pre[i-1])*post;
        post = post*nums[i];
    }
}
return pre;
}

console.log(productOfArrayExceptSelf([1,2,3,4]));