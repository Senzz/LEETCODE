/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// 动态规划
// 把当前步数当做最后一步
// 到达最后一步，比如第十层，就是走到第八层楼梯 + 走到第9层楼梯的和，重要的理解是这个

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 2) return 1
  const dp = [1, 2]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n-1]
};
// @lc code=end

