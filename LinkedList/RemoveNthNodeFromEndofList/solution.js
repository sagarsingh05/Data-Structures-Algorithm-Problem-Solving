/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/1708851555/
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let i = 0;
    while(i < n && fast != null) {
        i++;
        fast = fast.next;
    }
    if(fast == null) {
        let newHead = head.next;
        head.next = null;
        return newHead;
    }
    let slow = head;
    while(fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }
    let toBeDel = slow.next;
    slow.next = toBeDel.next;
    toBeDel.next = null;
    return head;
};