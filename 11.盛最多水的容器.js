/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  const l = height.length
  let a = 0
  let b = l - 1
  
  let maxArea = 0
  while (a < b) {
    const area = (b - a) * Math.min(height[a], height[b])
    maxArea = Math.max(area, maxArea)
    if (height[a] > height[b]) {
      b--
    } else {
      a++
    }
  } 
  return maxArea
};
// @lc code=end

