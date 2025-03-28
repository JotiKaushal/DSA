//Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// Example 1:
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
// - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
// Example 2:
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

//runs in O(m + n) time and use only O(1) memory

//below giving timeout error
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null;
 let pointerA = headA;
 let pointerB = headB;
 
 while(pointerA !== pointerB){
    pointerA = pointerA === null ? headA : pointerA.next;
    pointerB = pointerB === null ? headB : pointerB.next;
    console.log(pointerA)
     console.log(pointerB)
 }
 
 return pointerA;
 };

 //optimized solution
 var getIntersectionNode2 = function(headA, headB) {
    let set = new Set();
     while(headA) {
         set.add(headA);
         headA = headA.next;
     }
     while(headB) {
         if(set.has(headB)) return headB;
         headB = headB.next;
     }
     return null;
 };