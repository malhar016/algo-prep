var merge = function (intervals) {
  intervals.sort(([startA], [startB]) => startA - startB);

  let result = [];
  for (let interval of intervals) {
    if (!result[result.length - 1] || result[1] < interval[0]) {
      result.push(interval);
    } else {
      result[1] = Math.max(result[1], interval[1]);
    }
  }
  return result;
};

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
