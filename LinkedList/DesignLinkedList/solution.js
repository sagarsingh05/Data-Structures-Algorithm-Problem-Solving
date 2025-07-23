
/**
 * 
 * @param {*} data 
 * https://leetcode.com/problems/design-linked-list/submissions/1707636343/
 */
var Node = function(data) {
    this.data = data;
    this.next = null;
}


var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let i = 0;
    let temp = this.head;
    while(i < index && temp != null) {
        i++;
        temp = temp.next;
    }
    if(temp == null) return -1;
    return temp.data;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null) {
        this.head = new Node(val);
    } else {
        let n = new Node(val);
        n.next = this.head;
        this.head = n;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null) {
        this.head = new Node(val);
    } else {
        let temp = this.head;
        while(temp.next != null) {
            temp = temp.next;
        }
        let n = new Node(val);
        temp.next = n;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(this.head == null && index != 0) return;
    if(this.head == null ) {
        this.head = new Node(val);
        return;
    }
    if(index == 0) {
        this.addAtHead(val);
        return;
    }
    let i = 0;
    let prev = null;
    let curr = this.head;
    while(i < index && curr != null) {
        i++;
        prev = curr;
        curr = curr.next;
    }
    if(i != index) return;
    let n = new Node(val);
    prev.next = n;
    n.next = curr;
    return;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(this.head == null) return;
    if(index == 0) {
        this.deleteAtHead();
        return;
    }
    let i = 0;
    let prev = null;
    let nodeToBeDel = this.head;
    while(i < index && nodeToBeDel != null) {
        prev = nodeToBeDel;
        nodeToBeDel = nodeToBeDel.next;
        i++;
    }
    if(i != index) {
        return;
    }
    if(nodeToBeDel == null) return;
    let newNext = nodeToBeDel.next;
    prev.next = newNext;
    nodeToBeDel.next = null;
    return;
};

MyLinkedList.prototype.deleteAtHead = function() {
    if(this.head == null) return;
    let nextHead = this.head.next;
    let nodeToBeDelete = this.head;
    this.head = nextHead;
    nodeToBeDelete.next = null;
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
