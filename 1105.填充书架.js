/*
 * @lc app=leetcode.cn id=1105 lang=javascript
 *
 * [1105] 填充书架
 */

// @lc code=start
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  let dp = [0]
  for (let i = 1; i <= books.length; i++) {
    dp[i] = Infinity
    let w = 0
    let h = 0
    for (let j = i - 1; j >= 0; j--) {
      w += books[j][0]
      h = Math.max(h, books[j][1])
      if (w > shelfWidth) {
        break
      }
      dp[i] = Math.min(dp[i], dp[j] + h)
    }
  }
  return dp[books.length]
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
