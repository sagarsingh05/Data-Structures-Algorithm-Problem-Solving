class Stack{
    #arr; //Private member only accesible inside the class

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
    print(){
        console.log(this.#arr);
    }
}
let s = new Stack();
s.push(20);
s.push(30);
s.push(40);
s.pop();
console.log(s.top());
s.push(50);
console.log(s.top());