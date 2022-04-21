/**
 * Given the root of a binary tree, collect a tree's nodes as if you were doing this:

Collect all the leaf nodes.
Remove all the leaf nodes.
Repeat until the tree is empty.

Input: root = [1,2,3,4,5]
Output: [[4,5,3],[2],[1]]
Explanation:
[[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.

URL: https://leetcode.com/problems/find-leaves-of-binary-tree/
 */

var findLeaves = function(root) {
    prepareReach(root);
    const basket = [];
    pluckLeaves(root, basket);
    return basket;  
};

function prepareReach(root){
    if(root === null){
        return -1;
    }
    
    return root.reach = 1 + Math.max(prepareReach(root.left), prepareReach(root.right));
}

function pluckLeaves(root, basket){
    if(root === null){
        return;
    }
    pluckLeaves(root.left, basket);
    if(!basket[root.reach]){
        basket[root.reach] = [root.val];
    } else {
        basket[root.reach].push(root.val);
    }
    pluckLeaves(root.right, basket);
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let four = new TreeNode(4, null, null);
let five = new TreeNode(5, null, null);
let three = new TreeNode(3, null, null);
let two = new TreeNode(2, four, five);
let root = new TreeNode(1, two, three);

console.log(findLeaves(root));


