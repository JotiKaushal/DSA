// ach row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
//reference: https://www.youtube.com/watch?v=4UUIbkwkzGQ
 

var searchMatrix = function(matrix, target) {
    let i = 0; let j = matrix.length - 1;
    while(i < j){
     let mid = Math.ceil((i+j)/2);
     let num = matrix[mid][0];
     if(num === target){
        return true;
     }
    else if(num < target){
        i = mid;
    }else{
        j = mid - 1;
    }
    }
    
    let k = 0;
    let l = matrix[i].length - 1;
    
    while(k <= l){
    let mid = Math.floor((k+l)/2);
    let num = matrix[i][mid];
    if(num === target){
        return true;
    }else if(num < target){
        k = mid +1;
    }else{
        l = mid -1;
    }
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
