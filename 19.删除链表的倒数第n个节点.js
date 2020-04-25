/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 原理：
// 开头的第n个到达末尾、倒数的第n个到达开头，位置是相同的
// 所以双指针，A指向0，B指向顺数第n个
// A、B同时移动，保持相同间隔
// B一直到达末尾，A也就到达到倒数的n+1个

// 类似滑动窗口

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const listNode = new ListNode(0) // 主要是例子: [1], 1 的时候
  listNode.next = head
  let firstNode = listNode
  let secondNode = listNode
  while (n) {
    n--
    firstNode = firstNode.next
  }
  while (firstNode.next) {
    firstNode = firstNode.next
    secondNode = secondNode.next
  }
  secondNode.next = secondNode.next.next
  return listNode.next
};
// @lc code=end

