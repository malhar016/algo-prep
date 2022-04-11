/*

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
The replacement must be in place and use only constant extra memory.

[12,1,14,5,26]

Example 1:
Input: nums = [1,5,2,3]
Output: [1,3,2]

Example 2:
Input: nums = [3,2,1]
Output: [1,2,3]

Example 3:
Input: nums = [1,5,3]
Output: [3,5,1]

*/

let findNextPermutation = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }

  let swap = (a, b) => ([nums[a], nums[b]] = [nums[b], nums[a]]);

  let i = nums.length - 2,
    j = nums.length - 1;

  while (j >= 0) {
    while (i >= 0) {
      if (nums[i] < nums[j]) {
        swap(i, j);
        return nums;
      }
      i--;
    }
    j--;
  }
  // already in descending order so next permutation is sorted ascending order
  return nums.sort((a, b) => a - b);
};

console.log(findNextPermutation([1, 5, 3]));
