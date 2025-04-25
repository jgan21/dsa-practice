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
 * @return {number[][]}
 */
var levelOrder = function(root) {
//     if (!root) return [];
//     let result = [];
//     const queue = [root];

//     while (queue.length > 0){
//         let levelSize = queue.length;
//         const currentLevel = [];

//         for (let i = 0; i < levelSize; i++){
//             const node = queue.shift();
//             currentLevel.push(node.val)
//             if (node.left)queue.push(node.left);
//             if (node.right)queue.push(node.right);
//         }
//         result.push(currentLevel);
//     }
//     return result;
// };
    const result = [];
    function dfs(node, depth){
        if (!node) return;
        if (result.length === depth){
            result.push([])
        }
        result[depth].push(node.val)

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
    dfs(root, 0)
    return result;
};