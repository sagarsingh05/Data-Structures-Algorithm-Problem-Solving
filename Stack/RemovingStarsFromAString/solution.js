/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/removing-stars-from-a-string/submissions/1727650383/
 */
 class Stack{
    #arr;

    constructor(){
        this.#arr = [];
    }
    push(element){
        this.#arr.push(element);
    }
    pop(){
        this.#arr.pop();
    }
    top(){
        return this.#arr[this.#arr.length - 1];
    }
    isEmpty(){
        return this.#arr.length == 0;
    }
 }
var removeStars = function(s) {
    let i = 0;
    let stack = new Stack();

    while(i < s.length){
        if(s[i] != '*'){
            stack.push(s[i]);
        }
        else if(s[i] == '*' && !stack.isEmpty()){
            stack.pop();
        }
        i++;
    }

    let result = "";
    while(!stack.isEmpty()){
        let ch = stack.top();
        stack.pop();
        result = ch + result;
    }
    return result;
};