/**
 * 二叉树是否存在一个树的和等于某个值
 */


// 第一种
const isExist = (root, total) => {
  if (!root) {
    return total === 0
  }

  const hasLeftExist = isExist(root.left, total - root.value)
  const hasRightExist = isExist(root.right, total - root.value)
  return hasLeftExist || hasRightExist
}


// 第二种方式
var sum = function(root, value) {
  return dfs(root, 0, value)
};

let dfs = function (node, sum, value) {
  if(node) {
    sum = sum + node.value
    if(node.left) {
      const result = dfs(node.left, sum, value);
      if (result) return true
    } else {
      if (sum === value) {
        return true
      }
    }
    if (node.right) {
      const result = dfs(node.right, sum, value)
      if (result) return true
    } else {
      if (sum === value) {
        return true
      }
    }
  }
  return false
}


const root = new TreeNode(
  10,
  new TreeNode(1, new TreeNode(2), new TreeNode(3)),
  new TreeNode(2, new TreeNode(3.5), new TreeNode(4))
)

console.log(sum(root, 15.5))

console.log(isExist(root, 15.5))


function TreeNode(value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
}