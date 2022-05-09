/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (41.54%)
 * Likes:    256
 * Dislikes: 0
 * Total Accepted:    75K
 * Total Submissions: 176.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 深度优先搜索
// 深度优先搜索方法的缺陷是
// 所有节点都必须访问到，以保证能够找到最小深度。因此复杂度是 O(N)O(N) 
// var minDepth = function(root) {
//   if (root === null) return 0

//   if (root.left === null && root.right === null) {
//     return 1
//   }
//   let min = Number.MAX_VALUE
  
//   if (root.left !== null) {
//     min = Math.min(min, minDepth(root.left))
//   }

//   if (root.right !== null) {
//     min = Math.min(min, minDepth(root.right))
//   }

//   return min + 1
// };

// 与104结合起来

// 广度优先搜索
// 我们按照树的层去迭代，第一个访问到的叶子就是最小深度的节点
// 这样就不用遍历所有的节点了。
var minDepth = function(root) {
  if (root === null) return 0
  let depth = 1
  const queue = [{ node: root, depth }]

  while (queue.length) {
    const { node, depth } = queue.shift()
    if (node.left === null && node.right === null) {
      return depth
    }
    if (node.left !== null) {
      queue.push({ node: node.left, depth: depth + 1 })
    }
    if (node.right !== null) {
      queue.push({ node: node.right, depth: depth + 1 })
    }
  }
};
// @lc code=end

