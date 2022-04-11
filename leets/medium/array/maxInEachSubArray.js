/**
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.

 * Example:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * 
 * https://leetcode.com/problems/sliding-window-maximum/
 */

 let maxInSlidingWindow = (nums, k) => {
    let result = [], maxQueue = [];
    let right = 0, left = 0;

    while(right < nums.length){
        let lastMaxIdx = maxQueue.length - 1;
        while(lastMaxIdx >= 0){
            if(maxQueue[lastMaxIdx] < nums[right]){
                maxQueue.pop();
            }
            lastMaxIdx --;
        }
        maxQueue.push(nums[right]);
        right ++;

        console.log('maxQ: ', maxQueue, ' and result: ', result);

        if(right - left == k){
            result.push(maxQueue[0]);
            if(maxQueue[0] === nums[left]){
                maxQueue.shift();
            }
            left ++;
        }
    }
    return result;
 }

 console.log(maxInSlidingWindow([1,3,1,2,0,5], 3));