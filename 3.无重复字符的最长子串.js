/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 * 提示：滑动窗口
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 复习
var lengthOfLongestSubstring = function(s) {
  let left = 0
  let max = 0
  const hash = {}
  for (let right = 0; right < s.length; right++) {
    const moveLeft = hash[s[right]]
    if (moveLeft) {
      left = Math.max(left, moveLeft)
    }
    hash[s[right]] = right + 1
    max = Math.max(max, right - left + 1)
  }
  return max
};










// var lengthOfLongestSubstring = function(s) {
//   let max = 0
//   let left = 0
//   const hash = {}
//   for (let right = 0; right < s.length; right++) {
//     const moveLeft = hash[s[right]]
//     if (moveLeft) {
//       // 有相同的两个字符, 相同字符之间的长度
//       // 找到上一个字符的位置，即窗口left位置
//       // 但不能比现在的left更小（即更左边）, 因为这段已有重复的隔断了, 例子：abba, 即有bb了
//       // 所以需要Math.max
//       left = Math.max(left, moveLeft)
//     }
//     hash[s[right]] = right + 1
//     max = Math.max(max, right - left + 1)
//   }
//   return max
// };
// @lc code=end

