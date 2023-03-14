/**
 * 1615. 最大网络秩【存在官方JS题解，好好学写法！】
n 座城市和一些连接这些城市的道路 roads 共同组成一个基础设施网络。每个 roads[i] = [ai, bi] 都表示在城市 ai 和 bi 之间有一条双向道路。
两座不同城市构成的 城市对 的 网络秩 定义为：与这两座城市 直接 相连的道路总数。如果存在一条道路直接连接这两座城市，则这条道路只计算 一次 。
整个基础设施网络的 最大网络秩 是所有不同城市对中的 最大网络秩 。
给你整数 n 和数组 roads，返回整个基础设施网络的 最大网络秩 。

示例 1：
输入：n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]
输出：4
解释：城市 0 和 1 的网络秩是 4，因为共有 4 条道路与城市 0 或 1 相连。位于 0 和 1 之间的道路只计算一次。

示例 2：
输入：n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]
输出：5
解释：共有 5 条道路与城市 1 或 2 相连。

示例 3：
输入：n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]
输出：5
解释：2 和 5 的网络秩为 5，注意并非所有的城市都需要连接起来。
https://leetcode.cn/problems/maximal-network-rank/
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

let roads = [[0, 1], [0, 3], [2, 3], [2, 4], [1, 2], [1, 3]];
let n = 5;

var maximalNetworkRank = function (n, roads) {

    // JS创建固定长度的数组，看好了，巨人之力是这样用的！
    const connect = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const degree = new Array(n).fill(0);


    // 先对roads排序
    let sortedRoads = roads.sort((a, b) => {
        if (a[0] != b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    })

    // 遍历枚举都做不好，废物！
    // 直接使用of 枚举器
    for (const v of sortedRoads) {
        connect[v[0]][v[1]] = true;
        connect[v[1]][v[0]] = true;
        degree[v[0]]++;
        degree[v[1]]++;
    }

    let maxDegree = 0;
    // 实现全部的记录，之后二维遍历求最大值
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const tempDegree = degree[i] + degree[j] - (connect[i][j] ? 1 : 0);
            maxDegree = Math.max(maxDegree, tempDegree);
        }
    }
    return maxDegree;
};

maximalNetworkRank(n, roads)