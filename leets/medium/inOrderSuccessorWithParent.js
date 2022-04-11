var inorderSuccessor = function (node) {
  if (node === null) {
    return node;
  }

  const relations = ["left", "right", "root"];
  const curRelation = findRelation(node);
  let next = null;

  var firstOfInOrder = function (root) {
    if (root !== null && next === null) {
      firstOfInOrder(root.left);
      if (!next) {
        next = root;
      }
      firstOfInOrder(root.right);
    }
  };

  switch (relations[curRelation]) {
    case "root":
    case "left": {
      firstOfInOrder(node.right);
      if (!next) {
        next = node.parent;
      }
      break;
    }
    case "right": {
      firstOfInOrder(node.right);
      if (!next) {
        next = findNextParent(node);
      }
      break;
    }
  }
  return next;
};

var findNextParent = function (root) {
  let parent = root.parent;
  let superParent = parent.parent;
  while (superParent) {
    if (superParent.left && parent.val === superParent.left.val) {
      return superParent;
    }
    parent = superParent;
    superParent = superParent.parent;
  }
  return null;
};

var findRelation = function (node) {
  const parent = node.parent;
  if (parent === null) {
    return 2;
  }

  if (parent.left && node.val === parent.left.val) {
    return 0;
  }
  if (parent.right && node.val === parent.right.val) {
    return 1;
  }
};
