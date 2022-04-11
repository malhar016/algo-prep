var subarraySum = function (nums, k) {
  let map = new Map();
  let curSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    if (map.has(nums[i])) {
      count++;
      map.clear();
      curSum = 0;
    }
    map.set(k - curSum, i);
    while (curSum > k) {
      for (let key of map.keys()) {
        curSum -= nums[map.get(key)];
        map.delete(key);
      }
    }
  }
  return count;
};

console.log(subarraySum([1, 2, 3], 3));
