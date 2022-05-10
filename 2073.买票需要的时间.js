/*
 * @lc app=leetcode.cn id=2073 lang=javascript
 *
 * [2073] 买票需要的时间
 */

// @lc code=start
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let second = 0
  const len = tickets.length
  const kTicket = tickets[k]
  for (let i = 0; i < len; i++) {
    const curTicket = tickets[i]

    if (i <= k) {
      second += kTicket > curTicket ? curTicket : kTicket
    } else {
      second += kTicket > curTicket ? curTicket : (kTicket - 1)
    }
  }
  return second
};
// @lc code=end

