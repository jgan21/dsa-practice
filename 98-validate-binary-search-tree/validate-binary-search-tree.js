/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return true; // because an empty tree is still a valid tree.
    const queue = [{node:root, min: -Infinity, max: Infinity}]
    while (queue.length > 0){
        const {node, min, max} = queue.shift();
        if (node.val <= min || node.val >= max){
            return false;
        }
        if (node.left){
            queue.push({node: node.left, min: min, max: node.val})
        }
        if (node.right){
            queue.push({node:node.right, min: node.val, max: max})
        }
    }
    return true;
};