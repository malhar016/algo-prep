var findBuildings = function (heights) {
  let result = [],
    stack = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    if (!stack[stack.length - 1] || stack[stack.length - 1] <= heights[i]) {
      stack.push(heights[i]);
    }
  }

  console.log(stack);

  for (let i = 0; i < heights.length; i++) {
    if (stack[stack.length - 1] === heights[i]) {
      stack.pop();
    }
    if (heights[i] > stack[stack.length - 1]) {
      result.push(i);
    }
  }
  result.sort((a, b) => a - b);
  return result;
};

console.log(findBuildings([4, 2, 3, 1]));
