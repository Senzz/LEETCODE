/*
 * @lc app=leetcode.cn id=1105 lang=javascript
 *
 * [1105] 填充书架
 */

// 动态规划，用 dp[i] 表示放置前 i 本书所需要的书架最小高度，初始值 dp[0] = 0, 其他为最大值。
// 遍历每一本书
// 把当前这本书作为书架最后一层的最后一本书  重点
// 将这本书之前的书向后调整
// 看看是否可以减少之前的书架高度。状态转移方程为 dp[i] = min(dp[i] , dp[j - 1] + h)
// 其中 j 表示最后一层所能容下书籍的索引，h 表示最后一层最大高度。

// @lc code=start
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  let dp = [0]
  const n = books.length
  for (let i = 1; i <= n; i++) {
    dp[i] = Infinity
    let w = 0, h = 0
    for (let j = i - 1; j >= 0; j--) {
      w += books[j][0]
      h = Math.max(h, books[j][1])
      if (w > shelfWidth) {
        break
      }
      dp[i] = Math.min(dp[i], dp[j] + h)
    }
  }
  return dp[n]
};

const result = minHeightShelves(
  [
    [2, 7],
    [9, 1],
    [6, 1],
    [4, 2],
    [3, 3],
    [8, 6],
    [10, 3],
    [1, 10],
  ],
  10
);
console.log("input ", result);
// @lc code=end
