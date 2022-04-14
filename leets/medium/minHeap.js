function findKthLargest(nums, k) {
  function MinHeap() {
    items = [];

    const parent = function (idx) {
      return idx % 2 === 0 ? (idx - 2) / 2 : (idx - 1) / 2;
    };

    const minChild = function (idx) {
      let child1 = 2 * idx + 1;
      let child2 = 2 * idx + 2;
      if (!items[child2]) {
        return child1;
      }
      return items[child1] < items[child2] ? child1 : child2;
    };

    const swap = function (idx1, idx2) {
      [items[idx1], items[idx2]] = [items[idx2], items[idx1]];
    };

    bubbleUp = function () {
      let idx = items.length - 1;
      while (idx > 0) {
        let parentIdx = parent(idx);
        if (items[idx] >= items[parentIdx]) {
          break;
        }
        swap(idx, parentIdx);
        idx = parentIdx;
      }
    };

    bubbleDown = function () {
      let idx = 0;
      while (idx < items.length >> 1) {
        let minChildIdx = minChild(idx);
        if (items[idx] <= items[minChildIdx]) {
          break;
        }
        swap(idx, minChildIdx);
        idx = minChildIdx;
      }
    };
  }

  MinHeap.prototype.add = function(ele) {
    items.push(ele);
    bubbleUp();
  };

  MinHeap.prototype.remove = function() {
    let min = items.shift();
    items.unshift(items.pop());
    bubbleDown();
    return min;
  };

  let minHeap = new MinHeap();
  nums.forEach((num, idx) => {
    minHeap.add(num);
    if (idx >= k) {
      minHeap.remove();
    }
  });
  return minHeap.remove();
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
