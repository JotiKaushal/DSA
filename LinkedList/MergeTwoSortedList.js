// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Time complexity: O(m+n)
// m is length of list1 and n is length of list2

// Space complexity: O(1)


var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }else{
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
    };
  
 