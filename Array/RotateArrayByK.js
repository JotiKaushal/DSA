//[3,4,5,7,3,6,7,3]

//brut force solution

// function RotateArrayByK(arr, k) {
//     if(arr.length === 0) return 0;
//     if(k > arr.length){
//         k = k % arr.length;
//     }
//    const rotate = arr.splice(arr.length - k, arr.length);
//         arr.unshift(...rotate);
//     return arr;
// }


//optimized solution
//[1,2,3,4,5,6,7] [7,6,5,4,3,2,1] [5,6,7,4,3,2,1] [5,6,7,1,2,3,4]
// Summary
// Time Complexity: 
// O(n)
// Space Complexity: 
// O(1)
function RotateArrayByK(arr, k) {
    if(arr.length === 0) return 0;

        if(k > arr.length){
        k = k % arr.length;
    }
    
    reverse(arr, 0, arr.length -1);
    reverse(arr, 0, k -1);
    reverse(arr, k, arr.length -1);
    return arr;
}

//two pointer approach
function reverse(arr, left, right){
while (left < right) {
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}
}


console.log(RotateArrayByK([1,2,3,4,5,6,7], 3));