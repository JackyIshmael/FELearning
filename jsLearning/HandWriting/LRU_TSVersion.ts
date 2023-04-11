/*
  用 TS 实现一个缓存工具, 可以保存和访问数据;
  拥有 put 和 get 方法, put() 接收 key 和 value , 会将 value 保存;
  get() 接收 key , 会把 在 put 时候保存的 key 对应的 value 返回, 没有的话返回 null;
  数据 被 get 或者 put , 表示数据被使用.
  缓存拥有最大数量上限(capacity), 达到上限后, 将会移除最久未使用的数据(最近使用的数据会被尽可能保留);Latest
*/

// 参考:
// LRU
// 需要实现一个双链表类做数据存储
// 需要定义2个类，一个链表类，一个节点类

class LinkedListNode<K, V>{
    key: K;
    value: V;
    // TODO: 可能需要用TS的条件类型
    next: LinkedListNode<K, V>;
    prev: LinkedListNode<K, V>;
}


class LinkedList<K, V>{
    // 初始节点用于计算
    head: LinkedListNode<K, V>;
    tail: LinkedListNode<K, V>;
    constructor() {
        // TODO
        this.head = new LinkedListNode();
        this.tail = new LinkedListNode()
        this.head.prev = this.tail;
        this.head.next = this.tail;
        this.tail.next = this.head;
        this.tail.prev = this.head;
    }
    // TODO: 核心操作，删除节点

    delete(node: LinkedListNode<K, V>): K {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        return node.key
    }

    deleteLast(): K | undefined {
        if (this.head.next === this.tail) {
            return undefined;
        }
        // tail是辅助节点
        return this.delete(this.tail?.prev)
    }

    moveToHead(node: LinkedListNode<K, V>) {
        // 插入节点
        node.next = this.head.next;
        node.prev = this.head;

        //原本节点位置的prev需要指向node
        this.head.next.prev = node;
        this.head.next = node;
    }


}


class DataCache<K, V> {
    // 定义成员属性
    private capacity: number;
    private map: Map<K, LinkedListNode<K, V>>;
    private list: LinkedList<K, V>;

    constructor(capacity: number) {
        // TODO
        this.capacity = capacity;
        this.map = new Map();
        this.list = new LinkedList();
    }

    put: (key: K, value: V) => void = (key: K, value: V) => {
        // TODO: 有key时更新value，并需要将其移动到链表的head
        if (this.map.has(key)) {
            let tempNode = this.map.get(key);
            tempNode.value = value;
            // 该操作，将当前put的node的位置删除，并移动到头部表示最近使用
            this.list.delete(tempNode);
            this.list.moveToHead(tempNode);
        }
        else {
            // 容量满时，需要删除链表中最不常用的节点，同时将对应的key从map中删除
            if (this.map.size === size) {
                const deleteKey = this.list.deleteLast(tempNode);
                if (!deleteKey) {
                    this.map.delete(deleteKey);
                }


                // 容量没满时，新增节点
                const node = new LinkedListNode(key, value);
                this.map.set(key, node);
                this.list.moveToHead(node)

            }

        };

        get: (key: K) => V | null = (key: K) => {
            if (this.map.has(key)) {
                const node = this.map.get(key)
                const value = node?.value;
                // 需要更新到双链表的头部 表示最近使用过，所以立刻调用put方法
                this.put(key, value)
                return value;
            }
            return null;
        };
    }


