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
var timeRequiredToBuy = function(tickets, k) {
  let second = 0
  let n = tickets.length
  const kTicket = tickets[k]

  for(let i = 0; i < n; i++) {
    const iTicket = tickets[i]
    if (i <= k) {
      if (iTicket < kTicket) {
        second += iTicket
      } else {
        second += kTicket
      }
    } else {
      if (iTicket < kTicket) {
        second += iTicket
      } else {
        second += (kTicket - 1)
      }
    }
  }
  return second
};
// @lc code=end

