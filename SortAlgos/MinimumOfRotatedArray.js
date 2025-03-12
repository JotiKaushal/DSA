var findMin = function(nums) {
    if(nums.length === 0) return '';
    let n = nums.length;

    let left = 0;
    let right = n-1;

    while(left < right){
        const mid = Math.floor((left+right)/2);
        if(nums[mid] <=nums[right]){
              right = mid;
        }else{
           left = mid+1;
        }
    }
return nums[left]
};

console.log(findMin([3,4,5,1,2]));
