/*
Question: Implement Bubble Sort in Javascript
Write a function to sort the given array nums in ascending order
Input nums = [29,10,14,37,14] output=[10,14,14,29,37]
*/

const bubbleSort = (nums) =>{
const n = nums.length;
for (let i = 0; i < n; i++) {
for (let j = 0; j < n - i -1; j++) { //i = 0, j = 0 to 5-0-1= 4, in first sorting biggest element will be placed at the end
    if(nums[j] > nums[j+1]){
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
    }
}    
}
return nums
}

/*
time complexity(worst case) array is in decending order: O(n) * O(n) = O(n2)
time coplexity (average case) array elements are random: O(n)*o(n/2)=O(n2)
time complexity (best case): O(n)

space complexity: o(1)
*/


console.log(bubbleSort([29,10,14,37,14]));


/*first sort between

0 1 2 3 4 elements put biggest at last

second sort between

0 1 2 3 put second biggest at second last

third sort

0 1 2 put thirst biggest at third last


0 1 put forth boggest at fourth last

0

*/