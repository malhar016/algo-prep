var verticalOrder = function (root) {
  let map = new Map();
  let result = [];
  if (root === null) {
    return result;
  }
  let queue = [[root, 0]];
  getLevels(queue, map, result);
  return result;
};

function getLevels(queue, map, result) {
  let min = 0,
    max = 0;

  while (queue.length) {
    let [cur, level] = queue.shift();
    if (!map.has(level)) {
      map.set(level, []);
    }
    map.get(level).push(cur.val);
    if (cur.left) {
      queue.push([cur.left, level - 1]);
      min = min > level - 1 ? level - 1 : min;
    }
    if (cur.right) {
      queue.push([cur.right, level + 1]);
      max = max < level + 1 ? level + 1 : max;
    }
  }

  for (let i = min; i <= max; i++) {
    result.push(map.get(i));
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/*

      3
    /   \
   9     8
  / \   / \
 4   0 1   7
    /  \
   5     2
*/

let root = new TreeNode(3);
root.left = new TreeNode(9, new TreeNode(4), new TreeNode(0));
root.left.right.left = new TreeNode(5);
root.right = new TreeNode(8, new TreeNode(1), new TreeNode(7));
root.right.right.left = new TreeNode(2);

console.log(verticalOrder(root));
