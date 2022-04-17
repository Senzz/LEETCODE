/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// 动态规划
// 仍定义 F(i) 为组成金额 i 所需最少的硬币数量
// 假设在计算 F(i)之前，我们已经计算出 F(0)-F(i-1) 的答案

// 计算公式的思路就是，遍历所有面值的硬币
// j是当前硬币的面值，i最小的硬币数量，coins[i] 也就是他的面值， 也就是dp[j] = Math.min(dp[j - coins[i]] + 1) ， dp[j-coins[i]] 表示这个面值的上个面值的最优解，1表示当前硬币的面值


// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < coins; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j-coins[i]] +1 )
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};

// coinChange([2], 3)
// @lc code=end

