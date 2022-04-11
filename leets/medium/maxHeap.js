function findKthLargets(nums, k) {
  function MaxHeap() {
    this.items = [];
  }

  MaxHeap.prototype.parent = function (idx) {
    return idx % 2 === 0 ? (idx - 2) / 2 : (idx - 1) / 2;
  };

  MaxHeap.prototype.minChild = function (idx) {
    let child1 = 2 * idx + 1;
    let child2 = 2 * idx + 2;
    return this.items[child1] > this.items[child2] ? child1 : child2;
  };

  MaxHeap.prototype.swap = function (idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  };

  MaxHeap.prototype.bubbleUp = function () {
    let idx = this.items.length - 1;

    while (idx > 0) {
      let parentIdx = this.parent(idx);
      if (this.items[idx] <= this.items[parentIdx]) {
        break;
      }
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  };

  MaxHeap.prototype.bubbleDown = function () {
    let idx = 0;

    while (idx < this.items.length >> 1) {
      let minChildIdx = this.minChild(idx);
      if (this.items[idx] >= this.items[minChildIdx]) {
        break;
      }
      this.swap(idx, minChildIdx);
      idx = minChildIdx;
    }
  };

  MaxHeap.prototype.add = function (ele) {
    this.items.push(ele);
    this.bubbleUp();
  };

  MaxHeap.prototype.remove = function () {
    let min = this.items.shift();
    this.items.unshift(this.items.pop());
    this.bubbleDown();
    return min;
  };

  let maxHeap = new MaxHeap();
  nums.forEach((num, idx) => {
    maxHeap.add(num);
    if (idx >= k) {
      maxHeap.remove();
    }
  });
  console.log(maxHeap);
  return maxHeap.remove();
}

console.log(findKthLargets([3, 2, 3, 1, 2, 6, 5, 5, 4], 4));
