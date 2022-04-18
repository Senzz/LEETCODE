/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// 知识点
// 数据结构的物理存储结构只有两种：顺序存储结构和链式存储结构（像栈，队列，树，图等是从逻辑结构去抽象的，映射到内存中，也这两种物理组织形式）
// 哈希表的时间复杂度就是常数阶O(1)，而js的Object就是类似哈希表实现的

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const rest = target - num
    if (map.has(rest)) {
      return [map.get(rest), i]
    }
    map.set(num, i)
  }
  return null
}
// 使用Map （65ms, 89.29%）
// var twoSum = function (nums, target) {
//   const list = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i]
//     if (list.has(diff)) {
//       return [list.get(diff), i]
//     } else {
//       list.set(nums[i], i)
//     }
//   }
//   return 'not find'
// };

// (60ms, 95.27%)
// 使用object，提高效率
// var twoSum = function (nums, target) {
//   const obj = {}
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i]
//     if (obj.hasOwnProperty(diff)) {
//       return [obj[diff], i]
//     } else {
//       obj[nums[i]] = i
//     }
//   }
//   return 'not find'
// };
// @lc code=end

