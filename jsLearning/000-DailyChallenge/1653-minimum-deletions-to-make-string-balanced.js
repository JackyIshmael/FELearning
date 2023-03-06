
/**
 * 1653. 使字符串平衡的最少删除次数
给你一个字符串 s ，它仅包含字符 'a' 和 'b'​​​​ 。
你可以删除 s 中任意数目的字符，使得 s 平衡 。当不存在下标对 (i,j) 满足 i < j ，且 s[i] = 'b' 的同时 s[j]= 'a' ，此时认为 s 是 平衡 的。
请你返回使 s 平衡 的 最少 删除次数。



示例 1：
输入：s = "aababbab"
输出：2
解释：你可以选择以下任意一种方案：
下标从 0 开始，删除第 2 和第 6 个字符（"aababbab" -> "aaabbb"），
下标从 0 开始，删除第 3 和第 6 个字符（"aababbab" -> "aabbbb"）。

示例 2：
输入：s = "bbaaaaabb"
输出：2
解释：唯一的最优解是删除最前面两个字符。


提示：
1 <= s.length <= 105
s[i] 要么是 'a' 要么是 'b'​ 。

 */
// 类似字符串增删改操作，变换的最小步骤。
// 明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义。

/**
 * @param {string} s
 * @return {number}
 */

// 注意 js是无法给functin的参数添加类型的，同时一般也不用class，直接如此去写一个构造函数

// 很搞笑，就是所有的a必须出现在b之前 => base case
// 找出所有的 (b,a)对，将他们全部删掉，视为一次操作状态变更，然后拿这个结果，去取Max.math
// 能否拆分成子问题
// 数学公式是什么

var minimumDeletions = function (s) {

    let dp = [];
    let x = 0; // 统计b出现的次数
    if (s.charAt(0) === 'b') {
        x = 1;
    }
    dp.push(0);

    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === 'b') {
            x++;
            dp.push(dp[i - 1]);
            // 添加dp数组
        } else {
            dp.push(Math.min(dp[i - 1] + 1, x));
        }
    }

    return dp[s.length - 1]
};

var str = 'aabbaa';
console.log(minimumDeletions(str))



// 动态规划
//        |- dp[i - 1], s.charAt(i) = 'b'
//  dp[i] |
//        |- min(dp[i - 1] + 1, x), s.charAt(i) = 'a' 其中x为前i个元素中b出现的次数

// 表示 字符串长度为i的，平衡所需要的最小步数。
// 同样长度字符串，不同内容是不一样的，核心就在于其中的min操作

// base case  比如字符串只有a,b就不用删除。