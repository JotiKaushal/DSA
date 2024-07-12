/*
Question: Kth Missing Positive Number
Given an array arr of positive integers sorted in a strictly increasing order and an
integer k. Return kth positive integer that is missing from this array

Input =[2,3,4,7,11] k=5 output = 9

Explanation: The missing positive integers are [1,5,6,7,8,9,10,12,13.....]
             The 5th missing positive integer is 9.
*/

function findKthPositiveNUmber(arr, k) {
 let count = 0;
 for (let i = 0; i < arr.length; i++) {
    if(arr[i] <= k + count){
       count++;

    }
 }   
 return k + count; // k represent index of missing element and count represent number of elements missig before that number
}