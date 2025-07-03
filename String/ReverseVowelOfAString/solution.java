/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/1671375163/
 */
class Solution {
     public boolean isVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
               c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U';
    }
    public String reverseVowels(String s) {
        int i = 0;
        int j = s.length() - 1;
        char[] arr = s.toCharArray();

        while(i < j){
            if(!isVowel(arr[i])){
                i++;
                continue;
            }
            if(!isVowel(arr[j])){
                j--;
                continue;
            }

            char temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
            j--;
        }
        return new String(arr);
    }
}