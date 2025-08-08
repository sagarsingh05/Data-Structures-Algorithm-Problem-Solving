var Node = function(data) {
    this.data = data;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
};
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null) {
        this.head = new Node(val);
    } else {
        let n = new Node(val);
        n.next = this.head;
        this.head = n;
    }
};
MyLinkedList.prototype.deleteAtHead = function() {
    if(this.head == null) return;
    let nextHead = this.head.next;
    let nodeToBeDelete = this.head;
    this.head = nextHead;
    nodeToBeDelete.next = null;
}

class Stack{
    #ll;

    constructor(){
        this.#ll = new MyLinkedList();
    }
    push(element){
        this.#ll.addAtHead(element);
    }
    pop(){
        this.#ll.deleteAtHead();
    }
    top(){
        return this.#ll.head.data;
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
s.push(60);
console.log(s.top());
s.pop();