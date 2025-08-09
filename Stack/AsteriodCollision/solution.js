/**
 * @param {number[]} asteroids
 * @return {number[]}
 * https://leetcode.com/problems/asteroid-collision/submissions/1728658838/
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
            return this.#arr.length === 0;
        }
        size(){
            return this.#arr.length;
        }
 }
var asteroidCollision = function(ast) {
    let stack = new Stack();
    let i = 0;
    while(i < ast.length){
        if(stack.isEmpty()){
            stack.push(ast[i]);
            i++;
        }
        
        else{
            if(stack.top() > 0 && ast[i] < 0){
                if(Math.abs(stack.top()) == Math.abs(ast[i])){
                    stack.pop();
                    i++;
                }
                else{
                    if(Math.abs(stack.top()) > Math.abs(ast[i])){
                        i++;
                    }
                    else{
                        while(!stack.isEmpty() && stack.top() > 0 && ast[i] < 0 && Math.abs(stack.top()) < Math.abs(ast[i])){
                            stack.pop();
                        }
                    }
                }
            }
            else{
                stack.push(ast[i]);
                i++;
            }
        }
    }
    let result = new Array(stack.size())
    for(let idx = result.length - 1; idx >= 0; idx--){
        result[idx] = stack.top();
        stack.pop();
    }
    return result;
};