function longestSubStr(str1, str2){
    const m = str1.length, n = str2.length;
    const dp = new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(0,0,1));
    dp[0].fill(0);
    let max = 0, end = 0;

    function lcsDP(str1, str2) {
        for(let i = 1; i < dp.length; i ++){
            for(let j = 1; j < dp[0].length; j++){
                if(str1[i - 1] === str2[j - 1]){
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                    if(max < dp[i][j]){
                        max = dp[i][j];
                        end = i;
                    }
                    max = max < dp[i][j] ? dp[i][j] : max;
                } else {
                    dp[i][j] = 0;
                }
            }
        }
    }
    lcsDP(str1, str2);

    let ans = '';
    if(max > 0){
        for(let k = max; k > 0; k --){
            ans = str1[end - 1] + ans;
            end--;
        }
        console.log(ans);
    }

    return max;
}

console.log(longestSubStr("abcxyzu", "abckxyzu"));