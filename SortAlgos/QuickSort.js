
/*
Question: Implement Quick sort in javascript
Write a function to sort the given array nums in ascending order

Input [8,3,5,4,7,6,1,2,9] output: [1,2,3,4,5,6,7,8,9]

Benefits: its fast, save memory, amazing time & space complexity

Take a pivot start element or mid element or end element, take tw arrays left n right, move
smaller elements in left array aand bigger element in right array
*/

function quickSort(arr) {
    if(arr.length <= 0) return arr;

    const pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

//Time complexity:  
//best case: O(n log n) <== mostly used
//Average case: O(n log n)
//Worst case:O(n^2)
//Space complexity: because of recursive call
//average case: O(log n) <== mostly used
//worst: O(n)

console.log(quickSort([8,3,5,4,7,6,1,2,9]));