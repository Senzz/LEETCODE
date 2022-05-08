/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.88%)
 * Likes:    1563
 * Dislikes: 0
 * Total Accepted:    274.9K
 * Total Submissions: 661.6K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (map[c]) {
      // left括号
      stack.push(c)
      if (
        stack.length > s.length / 2 ||
        stack.length > s.length - i // 优化处理
      ) {
        return false
      }
    } else {
      // right括号
      const lastC = stack.pop()
      if (map[lastC] !== c) {
        return false
      }

    }
  }
  return stack.length === 0
};
// @lc code=end

