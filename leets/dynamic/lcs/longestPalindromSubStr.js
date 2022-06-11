function longestPalindrome(s, t = s.split().reverse().join('')){
   
    const m = s.length, n = t.length;
    const dp = new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(0,0,1));
    dp[0].fill(0);
    let max = 0, end = 0;

    function lcsDP(s, t) {
        for(let i = 1; i < dp.length; i ++){
            for(let j = 1; j < dp[0].length; j++){
                if(s[i - 1] === t[j - 1] && (i*2 == s.length || i !== j) ){
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
    lcsDP(s, t);

    let ans = '';
    if(max > 0){
        for(let k = max; k > 0; k --){
            ans = s[end - 1] + ans;
            end--;
        }
    }

    return ans;
}

//console.log(longestPalindrome("babad"));
//console.log(longestPalindrome("aacabkacaa"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("caac"));