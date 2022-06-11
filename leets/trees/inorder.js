/**
 * find inorder traversal of the tree
 */

import { treenode } from "./treenode"

const inorder = (root) => {
    if(root === null){
        return;
    }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}
