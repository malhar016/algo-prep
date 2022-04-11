var productExceptSelf = function (nums) {
  let left = [1],
    right = [1],
    result = [];

  for (let i = 1; i < nums.length; i++) {
    left.push(left[left.length - 1] * nums[i - 1]);
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right.unshift(right[0] * nums[i + 1]);
  }

  for (let i = 0; i < left.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
