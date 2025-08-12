class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    removeAtHead(){
        if(this.head == null) return;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = this.head.next;
        }
    }
    addAtTail(val){
        let n = new Node(val);
        if(this.head == null) {
            this.head = n;
            this.tail = n;
        }
        else{
            this.tail.next = n;
            this.tail = n;
        }
    }
    isEmptu(){
        return this.head == null;
    }
    getHead(){
        if(this.head == null) return null;
        return this.head.data;
    }
    getTail(){
        if(this.tail == null) return null;
        return this.tail.data;
    }
}

class Queue{
    constructor() {
        this.ll = new MyLinkedList();
    }
    enqueue(val){
        this.ll.addAtTail(val);
    }
    dequeue(){
        if(this.ll.isEmptu()) return null;
        this.ll.removeAtHead();
    }
    front(){
        return this.ll.getHead();
    }
    back(){
        return this.ll.getTail();
    }
    isEmpty(){
        return this.ll.isEmptu();
    }
    size() {
        let count = 0;
        let temp = this.ll.head;
        while(temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.front(), q.back()); // 10 30
q.dequeue();
console.log(q.front(), q.back()); // 20 30
q.enqueue(40);
console.log(q.front(), q.back());