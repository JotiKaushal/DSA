/*
Question: Implement Insertion Sort in Javascript
Write a function to sort the given array nums in ascending order
Input nums = [29,10,14,37,14,33.8.11] output=[8,10,11,14,14,29,33,37]
*/ 

const InsertionSort = (arr) => {
const n = arr.length;
for (let i = 1; i < n; i++) {
  let key =  arr[i];
  let j = i -1;
  
  while(j >= 0 && arr[j] > key){
    arr[j+1] = arr[j];
    j--;
  }
  arr[j+1] = key;
}
return arr;
}

console.log(InsertionSort([29,10,14,37,14,33,8,11]));

/*
time complexity(worst case) array is in decending order: O(n) * O(n) = O(n2)
time coplexity (average case) array elements are random: O(n)*o(n)=O(n2)
time complexity (best case): O(n)

space complexity: o(1)
*/ 