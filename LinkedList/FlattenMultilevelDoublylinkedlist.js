// You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

// Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

// Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

// Steps
// Iterate the linked list, and check if the child list exists for particular node or not
// If child exists then store the next part of that linked list into an array of nodes and change the next route of current node to child node.
// now once we are done with all child lists, we will get our original list into that way. But we also need to append the remaining lists into the current list.
// So run a reverse loop on the array where we had stored all the remaining lists. Why reverse, because the last remaining lists should be added first and so on.
// just merge the current lists with others lists that are present in array.
// Hope you like it, don't forget to upvote.
// Thanks

// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]
// Explanation: The multilevel linked list in the input is shown.
// After flattening the multilevel linked list it becomes:

// Here is the code for better understanding
var flatten = function(head) {
    var arr = [];
    var temp = head;
    var prev= null;
    while(temp)
        {
            if(temp.child!= null)
                {
                    arr.push(temp.next);
                    temp.next = temp.child;
                    temp.child.prev = temp;
                    temp.child = null;
                }
            prev = temp;
            temp = temp.next
        }
    for(var j=arr.length-1; j>=0; j--)
        {
            if(arr[j] != null)
                mergeOtherLists(arr[j]);
        }
    return head;
	
	function mergeOtherLists(root)
		{
			prev.next=root;
			root.prev=prev;
		   while(root)
			   {
				  prev = root;
				   root = root.next;
			   }
		}
};
