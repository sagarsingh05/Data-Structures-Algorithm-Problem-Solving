/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
/**
 * https://leetcode.com/problems/reverse-linked-list-ii/submissions/1712415704/
 */
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
       ListNode node = new ListNode(0);
       node.next = head;
       ListNode prev = node;

       for(int i = 1; i < left; i++){
        prev = prev.next;
       }

       ListNode curr = prev.next;
       ListNode temp = curr.next;

       for(int i = 0; i < right - left; i++){
        curr.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
        temp = curr.next;
       }
       return node.next;
    }
}