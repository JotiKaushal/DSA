const mergeInterval  = (intervals) => {
if(intervals.length === 0) return intervals;
//sort intervals if they are not sorted already
let start = 0;
let end = 1;
intervals = intervals.sort((a,b) => a[start] - b[start]);

let previous = intervals[0];
 let res = [previous];
for(let current of intervals){
    if(previous[end]<= current[end]){
        previous[end] = Math.max(current[end], previous[end]);
    }
    else{
        res.push(current);
        previous = current;
    }
}
return res;
}

//TC: o(n)
//SC: o(1)