/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 哈希集合
// var getIntersectionNode = function (headA, headB) {
//   const set = new Set()
//   let temp = headA
//   while (temp !== null) {
//     set.add(temp)
//     temp = temp.next
//   }

//   temp = headB

//   while (temp) {
//     if (set.has(temp)) {
//       return temp
//     }
//     temp = temp.next
//   }
//   return null
// };

// 双指针
var getIntersectionNode = function (headA, headB) {
  let a = headA
  let b = headB
  while (a !== b) {
    a = a === null ? headB : a.next
    b = b === null ? headA : b.next
  }

  return a || null
};
// @lc code=end
