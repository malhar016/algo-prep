/**
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.

 * Example:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * 
 * https://leetcode.com/problems/sliding-window-maximum/
 */

let maxInSlidingWindowBF = (nums, k) => {
    if( nums.length <= k ){
        return [Math.max(...nums)];
    }
    let result = nums.reduce((acc, cur, i) => {
        if(i <= nums.length - k){
            acc.push(Math.max(...nums.slice(i, i + k)));
        }
        return acc;
    }, []);
    return result;
}

console.log(maxInSlidingWindowBF([1,3,1,2,0,5], 3));