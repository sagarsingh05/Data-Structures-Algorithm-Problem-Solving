public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
class Solution {
    public ListNode[] splitListToParts(ListNode head, int k) {
        ListNode[] res = new ListNode[k];
        ListNode temp = head;
        int n = 0;

        while(temp != null){
            n++;
            temp = temp.next;
        }
        int minSize = n / k;
        int node = n % k;

        ListNode curr = head;

        for(int i = 0; i < k; i++){
            res[i] = curr;
            int currSize = minSize + (node > 0 ? 1 : 0);
            node--;

            for(int j = 1; j < currSize; j++){
                if(curr != null){
                    curr = curr.next;
                }
            }
            if(curr != null){
                ListNode next = curr.next;
                curr.next = null;
                curr = next;
            }
        }
        return res;
    }
}