/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (50.22%)
 * Likes:    317
 * Dislikes: 0
 * Total Accepted:    74.4K
 * Total Submissions: 143.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 
 * 
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 
 * 
 * 示例 1:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7]
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回 true 。
 * 
 * 示例 2:
 * 
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * 返回 false 。
 * 
 * 
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
 * @return {boolean}
 */
// 自顶向下
// var isBalanced = function(root) {
//   if (root === null) return true
//   return Math.abs(getHeight(root.left) - getHeight(root.right)) < 2
//     && isBalanced(root.left)
//     && isBalanced(root.right)
// };

// function getHeight(root) {
//   if (root === null) return 0
//   return 1 + Math.max(getHeight(root.left), getHeight(root.right))
// }

// 自定向上
var isBalanced = function (root) {
  return helper(root).balanced
}

function TreeInfo(height, balanced) {
  this.height = height
  this.balanced = balanced
}

function helper (root) {
  if (root === null) return new TreeInfo(0, true)
  const l = helper (root.left)
  if (!l.balanced) {
    return new TreeInfo(0, false)
  }
  const r = helper (root.right)
  if (!r.balanced) {
    return new TreeInfo(0, false)
  }
  if (Math.abs(l.height - r.height) < 2) {
    return new TreeInfo(Math.max(l.height, r.height) + 1, true)
  }
  return new TreeInfo(0, false);
}

// @lc code=end

