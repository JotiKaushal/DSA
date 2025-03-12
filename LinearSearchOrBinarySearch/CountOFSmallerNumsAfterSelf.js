//time: o(nlogn)(good) = > o(n2) (worst case)
//space: o(n)

//https://www.youtube.com/watch?v=JU0nukdutuo


// Very interesting problem.
// Binary search would be not that hard to come up with, but still O(n^2)
// we need to find a data structure to improve search & insertion

// list : search is O(logn), but insertion is O(n)
// linked list: search is O(n), insertion is O(1)
// bst: search is O(logN) (averagely), insertion is O(1)

// so BST is best approach. but attention that it depends on the order of the input, if it is already sorted (desc), then it is flatten into a linked list, and worst time is O(N^2)


var countOfSmaller = function(nums) {
const result =[0];

const sorted = [nums[nums.length -1]]

for(let i = nums.length -2; i >=0; i--){
    const num = nums[i]
    let start =0;
    let end = sorted.length -1;

    while(start <= end){
        const mid = Math.floor((start+end)/2);
        if(nums[mid] >= num){end-=1}else{
            start +=1
        }
    }

    result.push(start);
    sorted.splice(start,0, num);
    console.log(sorted);
    

}
return result.reverse();
}


class Node {
    constructor(val) {
        this.val = val;
        this.countOfLeftTree = 0;
        this.countOfSelf = 1;
        this.left = null;
        this.right = null;
    }
}



var countSmaller2 = function(nums) {
       if (nums.length === 0) return [];
    const root = new Node(nums[nums.length - 1]);

    const searchAndInsert = (nodeVal) => {
        const node = new Node(nodeVal);
        let p = root;
        let countOfSmaller = 0;
        while (p) {
            if (node.val === p.val) {
                p.countOfSelf += 1;
                return p.countOfLeftTree + countOfSmaller;
            }

            if (node.val < p.val) {
                p.countOfLeftTree += 1
                if (p.left) {
                    p = p.left
                } else {
                    p.left = node;
                    return countOfSmaller;
                }
            } else {
                countOfSmaller += p.countOfLeftTree + p.countOfSelf;
                if (p.right) {
                    p = p.right
                } else {
                    p.right = node
                    return countOfSmaller;
                }
            }
        }
    }

    const result = [0];

    for (let i = nums.length - 2; i >= 0; i--) {
        result.push(searchAndInsert(nums[i]))
    }

    return result.reverse();
};

console.log(countOfSmaller([5,2,6,1]));
