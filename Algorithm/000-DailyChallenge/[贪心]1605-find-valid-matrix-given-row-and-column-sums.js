/**
 * @description 贪心算法【不会做
 * 给你两个非负整数数组 rowSum 和 colSum ，其中 rowSum[i] 是二维矩阵中第 i 行元素的和， colSum[j] 是第 j 列元素的和。换言之你不知道矩阵里的每个元素，但是你知道每一行和每一列的和。
请找到大小为 rowSum.length x colSum.length 的任意 非负整数 矩阵，且该矩阵满足 rowSum 和 colSum 的要求。
请你返回任意一个满足题目要求的二维矩阵，题目保证存在 至少一个 可行矩阵。


示例 1：
输入：rowSum = [3,8], colSum = [4,7]
输出：[[3,0],
      [1,7]]
解释：
第 0 行：3 + 0 = 3 == rowSum[0]
第 1 行：1 + 7 = 8 == rowSum[1]
第 0 列：3 + 1 = 4 == colSum[0]
第 1 列：0 + 7 = 7 == colSum[1]
行和列的和都满足题目要求，且所有矩阵元素都是非负的。
另一个可行的矩阵为：[[1,2],
                  [3,5]]
示例 2：
输入：rowSum = [5,7,10], colSum = [8,6,8]
输出：[[0,5,0],
      [6,1,0],
      [2,0,8]]

链接：https://leetcode.cn/problems/find-valid-matrix-given-row-and-column-sums
 */

/**
 * 解法：matrix[i][j]
 */

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    // 矩形 散列。
    // 贪心算法
    let tempRowSum = rowSum;
    let tempColSum = colSum;
    let res = [];
    let resByRow = [];

    for (let i = 0; i < rowSum.length; i++) {
        for (let j = 0; j < colSum.length; j++) {
            const greedRes = Math.min(colSum[j], rowSum[i])
            colSum[j] -= greedRes;
            rowSum[i] -= greedRes;
            resByRow.push(greedRes);
        }
        res.push(resByRow);
        resByRow = [];
    }

    return res;
};