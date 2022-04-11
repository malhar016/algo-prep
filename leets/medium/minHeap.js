function findKthLargest(nums, k) {
  function MinHeap() {
    this.items = [];
  }

  MinHeap.prototype.parent = function (idx) {
    return idx % 2 === 0 ? (idx - 2) / 2 : (idx - 1) / 2;
  };

  MinHeap.prototype.minChild = function (idx) {
    let child1 = 2 * idx + 1;
    let child2 = 2 * idx + 2;
    if (!this.items[child2]) {
      return child1;
    }
    return this.items[child1] < this.items[child2] ? child1 : child2;
  };

  MinHeap.prototype.swap = function (idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  };

  MinHeap.prototype.bubbleUp = function () {
    let idx = this.items.length - 1;

    while (idx > 0) {
      let parentIdx = this.parent(idx);
      if (this.items[idx] >= this.items[parentIdx]) {
        break;
      }
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  };

  MinHeap.prototype.bubbleDown = function () {
    let idx = 0;

    while (idx < this.items.length >> 1) {
      let minChildIdx = this.minChild(idx);
      if (this.items[idx] <= this.items[minChildIdx]) {
        break;
      }
      this.swap(idx, minChildIdx);
      idx = minChildIdx;
    }
  };

  MinHeap.prototype.add = function (ele) {
    this.items.push(ele);
    this.bubbleUp();
  };

  MinHeap.prototype.remove = function () {
    let min = this.items.shift();
    this.items.unshift(this.items.pop());
    this.bubbleDown();
    return min;
  };

  let minHeap = new MinHeap();
  nums.forEach((num, idx) => {
    minHeap.add(num);
    if (idx >= k) {
      minHeap.remove();
    }
  });
  console.log(minHeap);
  return minHeap.remove();
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
