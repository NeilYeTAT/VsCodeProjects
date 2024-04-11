// 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。
// 给定一个数组 nums 代表了集合 S 发生错误后的结果。
// 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

// 集合, 也就是数组中不应该有重复, 重复的就是error的, error卡在左边和右边中间
// 返回的是数组 , 数组的第一个值是重复的值, 第二个是原来的值
// 返回的数必须是从小到大无重复的集合数字
// const nums = [1, 2, 2, 4]
// const nums = [3, 2, 2]
// const nums = [1, 2, 3, 3]
// 标记
// const nums = [1, 1]
// const nums = [1, 5, 3, 2, 2, 7, 6, 4, 8, 9]
// const nums = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9]
// -----------------------------------------------------------思路错了
// const findErrorNums = function (nums) {
//   let arr = nums.sort((a, b) => a - b)
//   let mark = 0
//   for (let i = 0; i < arr.length; i++) {
//     // i = 1
//     if (arr[i] === arr[i + 1]) {
//       mark = arr[i + 1]
//       if (arr[0] !== 1) {
//         return [mark, 1]
//       }
//       if (mark - 1 < arr[i] && mark - 1 > arr[i - 1]) {
//         return [mark, mark - 1]
//       }
//       if (mark + 1 < arr[i + 2] || !(arr[i + 2])) {
//         return [mark, mark + 1]
//       }
//       console.log('none')
//       return [mark, arr[arr.length - 1] + 1]
//     }
//   }
// }
// console.log(findErrorNums(nums))
// ------------------------------------------------------------------------
// 纯数学解题： 逆天大佬的思路
// sum(nums) - sum(set(nums)) = 重复的数字
// (1 + len(nums)) * len(nums) // 2 - sum(set(nums)) = 丢失的数字
// ============================================================================
// 1. 插入位置在末尾
// 2. 插入位置在开头
// 3. 插入位置在中间
// const nums = [1, 2, 4, 4, 5, 6]
//    res =  [1, 2, 4, 5, 6]
//            0, 1, 2
// nums = [1, 2, 3, 4, 4]
// const nums =[5,3,6,1,5,4,7,8]
const nums = [1, 5, 3, 2, 2, 7, 6, 4, 8, 9]

// res =  [1, 2, 3, 4, 6]
const findErrorNums = function (nums) {
  let arr = nums.sort((a, b) => a - b)
  let res = [...new Set(arr)]
  for (let i = 0; i < arr.length; i++) {
    // 第一层循环找到重复的数值
    if (arr[i] !== res[i]) {
      let find = arr[i]
      // 第二层循环判断插入的位置
      if (res[0] !== 1) {
        console.log('none')
        return [find, 1]
      }
      for (let j = 0; j < res.length; j++) {
        if (res[j] > j + 1) {
          return [find, j + 1]
        }
      }
      return [find, nums.length]
    }
  }
}
console.log(findErrorNums(nums))
// 如果早知道, 我一定好好写文档, 写注释😭
