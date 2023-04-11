/**
给你一个长度为 n 的字符串数组 names 。你将会在文件系统中创建 n 个文件夹：在第 i 分钟，新建名为 names[i] 的文件夹。
由于两个文件 不能 共享相同的文件名，因此如果新建文件夹使用的文件名已经被占用，系统会以 (k) 的形式为新文件夹的文件名添加后缀，其中 k 是能保证文件名唯一的 最小正整数 。
返回长度为 n 的字符串数组，其中 ans[i] 是创建第 i 个文件夹时系统分配给该文件夹的实际名称。

 

示例 1：

输入：names = ["pes","fifa","gta","pes(2019)"]
输出：["pes","fifa","gta","pes(2019)"]
解释：文件系统将会这样创建文件名：
"pes" --> 之前未分配，仍为 "pes"
"fifa" --> 之前未分配，仍为 "fifa"
"gta" --> 之前未分配，仍为 "gta"
"pes(2019)" --> 之前未分配，仍为 "pes(2019)"
示例 2：

输入：names = ["gta","gta(1)","gta","avalon"]
输出：["gta","gta(1)","gta(2)","avalon"]
解释：文件系统将会这样创建文件名：
"gta" --> 之前未分配，仍为 "gta"
"gta(1)" --> 之前未分配，仍为 "gta(1)"
"gta" --> 文件名被占用，系统为该名称添加后缀 (k)，由于 "gta(1)" 也被占用，所以 k = 2 。实际创建的文件名为 "gta(2)" 。
"avalon" --> 之前未分配，仍为 "avalon"
示例 3：

输入：names = ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"]
输出：["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]
解释：当创建最后一个文件夹时，最小的正有效 k 为 4 ，文件名变为 "onepiece(4)"。
示例 4：

输入：names = ["wano","wano","wano","wano"]
输出：["wano","wano(1)","wano(2)","wano(3)"]
解释：每次创建文件夹 "wano" 时，只需增加后缀中 k 的值即可。
示例 5：

输入：names = ["kaido","kaido(1)","kaido","kaido(1)"]
输出：["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
解释：注意，如果含后缀文件名被占用，那么系统也会按规则在名称后添加新的后缀 (k) 。
 

提示：

1 <= names.length <= 5 * 10^4
1 <= names[i].length <= 20
names[i] 由小写英文字母、数字和/或圆括号组成。


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/making-file-names-unique
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
    const test = new Map();

    for (let i = 0; i < names.length; i++) {
        addKey(test, names[i]);
    }

    console.log([...test.keys()]);
};

function addKey(map, key) {
    if (!map.has(key)) {
        map.set(key, 0);
        return;
    }
    // 可采用一些剪枝操作减小每次迭代的范围 （必要！执行用时从4000ms提高到144ms   
    let tempNum = map.get(key); // 剪枝操作
    tempNum++;
    while (true) {
        if (map.has(key + `(${tempNum})`)) {
            tempNum++;
        } else {
            map.set(key + `(${tempNum})`, 0);
            map.set(key, tempNum); // 剪枝操作
            break;
        }
    }
}

const names = ["wano", "wano", "wano", "wano"]
getFolderNames(names)

const names2 = ["pes", "fifa", "gta", "pes(2019)"]
getFolderNames(names2)
// 是否分配：直接用原key检查has

// key存在
// 已分配情况下：
    // 启动分配循环
    // 临时变量 = 1、判断key(1)是否存在，临时变量++
    // 临时变量 = 2、判断key(2)是否存在，临时变量++
    // 判断key(3)是否存在，不存在时，使用临时变量直接拼接，直到实际添加为止，不结束循环。


// 未分配：直接添加
    // 不判断后缀，直接添加