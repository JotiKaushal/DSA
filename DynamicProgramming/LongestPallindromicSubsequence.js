//read about LCS
//reference https://www.youtube.com/watch?v=-BPnPgPKykc

const longestPallindrome = (s) =>{
 
    const n = s.length;

    //empty array with 0
    const dp = Array(n).fill(0).map(()=>Array(n).fill(0));

    //diagonal fill with 1  
    for (let i = 0; i < n; i++) {
       dp[i][i] = 1;
        
    }

    //dp solution
    for (let c = 1; c < n; c++) {
        for (let r = 0; r+c < n; r++) {
            const w = r+c;
            if(s[r] === s[w]){
                dp[r][w] = dp[r+1][w-1] +2;
            }
            else{
                dp[r][w]= Math.max(dp[r][w-1], dp[r+1][w]);
            }
        }
        
    }
    return dp[0][n-1];

}