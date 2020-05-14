/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 *
 * https://leetcode-cn.com/problems/backspace-string-compare/description/
 *
 * algorithms
 * Easy (50.08%)
 * Likes:    112
 * Dislikes: 0
 * Total Accepted:    19.5K
 * Total Submissions: 38.6K
 * Testcase Example:  '"ab#c"\n"ad#c"'
 *
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 * 
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：S = "ab#c", T = "ad#c"
 * 输出：true
 * 解释：S 和 T 都会变成 “ac”。
 * 
 * 
 * 示例 2：
 * 
 * 输入：S = "ab##", T = "c#d#"
 * 输出：true
 * 解释：S 和 T 都会变成 “”。
 * 
 * 
 * 示例 3：
 * 
 * 输入：S = "a##c", T = "#a#c"
 * 输出：true
 * 解释：S 和 T 都会变成 “c”。
 * 
 * 
 * 示例 4：
 * 
 * 输入：S = "a#c", T = "b"
 * 输出：false
 * 解释：S 会变成 “c”，但 T 仍然是 “b”。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= S.length <= 200
 * 1 <= T.length <= 200
 * S 和 T 只含有小写字母以及字符 '#'。
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以用 O(N) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let i = S.length
  let j = T.length
  let skipS = 0
  let skipT = 0						

  while (i > 0 || j > 0) {
    while (i > 0) {
      if (S[i - 1] === '#') {
        skipS++
        i--
      } else if (skipS > 0) {
        skipS--
        i--
      } else {
        break
      }
    }
    while (j > 0) {
      if (T[j - 1] === '#') {
        skipT++
        j--
      } else if (skipT > 0) {
        skipT--
        j--
      } else {
        break
      }
    }

    if (S[i - 1] !== T[j - 1]) {
      return false
    }
    if ((i > 0) !== (j > 0)) {
      return false
    }
    i--
    j--
  }
  return true
};

/**
 * stack method
 */
// var backspaceCompare = function(S, T) {
//   return toStackStr(S) === toStackStr(T)
// };

// function toStackStr(str) {
//   let stackArr = []
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case '#':
//         stackArr.pop()
//         break
//       default:
//         stackArr.push(str[i])
//     }
//   }
//   return stackArr.join('')
// }

// @lc code=end

