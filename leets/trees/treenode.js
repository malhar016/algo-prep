/**
 * Common function to generate tree node objects for binary trees.
 * @param {node value} val - current value at the tree-node
 * @param {left child} left - reference to the left child of the tree-node
 * @param {right child} right - reference to the right child of the tree-node
 */

export function treenode(val, left, right) {
   this.val = (val === undefined) ? 0: val;
   this.left = (left === undefined) ? null: left;
   this.right = (right === undefined) ? null : right;
}

export function getTreeFromArray(nums = []) {
   if(nums === null || nums?.length === 0) {
      return null;
   }
   for(let i = 0; i < nums.lenght; i++) {

   }
}