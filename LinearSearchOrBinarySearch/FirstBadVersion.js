/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
//reference https://www.youtube.com/watch?v=jf2n9mrXy4I
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
     const NO_BAD_VERSION_FOUND = -1;
    return function(n) {
        if(n === 1){
            if(isBadVersion(n)){return 1}
            else{return NO_BAD_VERSION_FOUND; }
        }
        let left = 1, right = n;
        let firstBadVersion = NO_BAD_VERSION_FOUND;
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(isBadVersion(mid)){
                 firstBadVersion = mid;
                 right = mid -1;
            }else{
                  left = mid +1
            }
        }
        return firstBadVersion;
    };
};