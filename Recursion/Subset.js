//also an example of backtracking algo
//given an integer array nums of unique elemets,
// return all possible subsets (power set). solutionmust ot have duplicates [1,3]=[3,1]
//[1,2,3] = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//[0] =[[],[0]]

//first we will take it, then we will reject it

function FindSubset(arr) {
    let result =[];
    let temp = [];

    function recursiveCall(arr, i) {
        if(i === arr.length) {
            result.push([...temp])
            return result;
        }

        temp.push(arr[i]);
        recursiveCall(arr, i+1);
        temp.pop(arr[i]);
        recursiveCall(arr, i+1)
    }
    recursiveCall(arr, 0);
    return result;
}
//check diagram on youtube roadsidecoder for revision

console.log(FindSubset([1,2,3]));