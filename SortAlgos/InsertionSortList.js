
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertionSortList(head) {
    if (!head || !head.next) {
      return head;
    }
    let sorted = null;
    let current = head;
    while (current != null) {
      let next = current.next;
      sorted = sortedInsert(sorted, current);
      current = next;
    }
    return sorted;
  }

  //1 4 2 5 3
  //check if head is null or head.next null if yes retun head
  //set variable current = head & sorted = null
  //while current not null
  //variable next = current.next
  // sort fun(sorted, current)
  //current = next
  //return sorted

  //sort function
  //example
  //current = 1
  //if(sorted== null || sorted.val > current.val)
  //current.next = sorted                         
  //return current // means sorted = 1
  //else
  //let c2 = srted
  //while c2.next && c2.next.val < current.val
  //      c2 = c2.next
  ///      current.next = c2.next
  //c2.next = current
  //return c2

    
  function sortedInsert(sorted, newNode) {
    if (!sorted || sorted.val >= newNode.val) {
      newNode.next = sorted;
      return newNode;
    } else {
      let current = sorted;
      while (current.next != null && current.next.val < newNode.val) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      return sorted;
    }
  }