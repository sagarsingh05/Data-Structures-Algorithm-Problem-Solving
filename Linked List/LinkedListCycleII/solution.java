/**
 * https://leetcode.com/problems/linked-list-cycle-ii/submissions/1716133932/
 */
package LinkedList.LinkedListCycleII;
import java.util.HashSet;

public class solution {
    public ListNode detectCycle(ListNode head) {
        HashSet<ListNode> set = new HashSet<>();
        ListNode curr = head;
        while(curr != null){
            if(set.contains(curr)){
                return curr;
            }
            set.add(curr);
            curr = curr.next;
        }
    return null;
    }
}

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