/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
/**
 * https://leetcode.com/problems/linked-list-cycle/submissions/1716100426/
 */
import java.util.HashSet;
public class Solution {
    public boolean hasCycle(ListNode head) {
        HashSet<ListNode> set = new HashSet<>();
        ListNode curr = head;
        while(curr != null){
            if(set.contains(curr)){
                return true;
            }
            set.add(curr);
            curr = curr.next;
        }
        return false;
    }
}