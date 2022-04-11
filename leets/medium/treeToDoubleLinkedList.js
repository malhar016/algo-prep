function convertTreeToDL(node) {
  if (root === null) {
    return root;
  }
  let [head, last] = inOrderToDL(node);
  head.left = last;
  last.right = head;
  printDL(head);
  return head;
}

function inOrderToDL(root, head = null, prev = null) {
  if (root === null) {
    return [head, prev];
  }
  [head, prev] = inOrderToDL(root.left, head, prev);
  if (head === null) {
    head = root;
  }
  if (prev !== null) {
    prev.right = root;
  }
  prev = root;
  [head, prev] = inOrderToDL(root.right, head, prev);
  if (prev !== null) {
    prev.left = root;
  }

  return [head, prev];
}

function printDL(head) {
  if (head === null) {
    console.log("Empty List");
    return;
  }
  let cur = head;
  while (cur.right && cur !== head) {
    console.log(cur.value);
  }
  while (cur.left && cur !== head) {
    console.log(cur.value);
  }
}

function treeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new treeNode(4);
root.left = new treeNode(2, new treeNode(1), new treeNode(3));
root.right = new treeNode(5);

console.log(convertTreeToDL(root));
