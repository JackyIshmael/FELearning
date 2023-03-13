function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {

    // 合并2个有序链表。
    // 双指针
    // 虚拟头节点
    // 链表问题，通常需要一个虚拟指针来存储结果
    let dummy = new ListNode(-1)
    let p = dummy
    let p1 = list1;
    let p2 = list2;

    whiel(p1 != null && p2 != null){
        if (p1.val >= p2.val) {
            p.next = p2;
            p2 = p2.next;
        } else {
            p.next = p1;
            p1 = p1.next;
        }
        // 需要断开链接
        p = p.next;
    }

    if (p1 != null) {
        p.next = p1;
    }

    if (p2 != null) {
        p.next = p2;
    }

    return dummy.next
};


mergeTwoLists()