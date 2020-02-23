/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 自己的解答
var addTwoNumbers = function(l1, l2) {
  if (!l1 && !l2) {
    return null
  }
  if (!l1) {
    l1 = new ListNode(0)
  }
  if (!l2) {
    l2 = new ListNode(0)
  }
  let sum = l1.val + l2.val
  let diff = 0
  if (sum >= 10) {
    sum = sum - 10
    diff += 1
  }
  const result = new ListNode(sum)
  if (diff) {
    if (!l1.next) {
      l1.next = new ListNode(0)
    }
    l1.next.val += diff
  }
  result.next = addTwoNumbers(l1.next, l2.next)
  return result
};
// @lc code=end

