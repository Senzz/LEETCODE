/*
 * @lc app=leetcode.cn id=2089 lang=javascript
 *
 * [2089] 找出数组排序后的目标下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  let prev = 0
  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num < target) {
      prev += 1
    } else if (num === target) {
      cur += 1
    }
  }
  const result = []
  for (let i = 0; i < cur; i++) {
    result[i] = prev + i
  }
  return result
};
// @lc code=end

