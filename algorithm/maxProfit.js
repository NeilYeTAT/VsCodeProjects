// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

const maxProfit = function (prices) {
  let max = prices[0]
  let min = prices[0]
  let profit = 0
  for (let item of prices) {
    if (item > max) {
      max = item
    } else if (item < min) {
      min = item
      max = item
    } else {

    }
    profit = profit > (max - min) ? profit : (max - min)
  }
  return profit
}