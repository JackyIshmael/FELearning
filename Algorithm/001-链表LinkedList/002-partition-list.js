/**
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
你应当 保留 两个分区中每个节点的初始相对位置。

示例 1：
输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]

示例 2：
输入：head = [2,1], x = 2
输出：[1,2]
 
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/partition-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    // 依旧是双指针？ 难点在与虚拟节点
    // 可以把原链表分成两个小链表，一个链表中的元素大小都小于 x，另一个链表中的元素都大于等于 x，最后再把这两条链表接到一起，就得到了题目想要的结果。
    // 合并链表，用一条虚拟头节点存储结果，到这边分解链表，自然就是用两条虚拟节点存储结果

    let dummy1 = new ListNode(-1);
    let dummy2 = new ListNode(-1);
    let dummy = head; // 复制一个头节点用于一次遍历

    while ()
};