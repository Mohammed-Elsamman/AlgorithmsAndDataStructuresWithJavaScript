#!/usr/bin/nodejs
//node locate in your machine

//create Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

/*
************(FIFO)*************
*   the point of queue that you
*   will insert in the last of it
*   and remove from the start
*/

/*
*   ====> recommendation
*   yoy should NOT implement queue
*   with ==> ARRAY <==
*   because of shifting index in array
*   when you remove the first index
*/


class QueueWithList {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //enqueue new node into queue
    enqueue(value) {
        const NewNod = new Node(value);
        if (this.length === 0) {
            this.first = NewNod;
            this.last = NewNod;
        } else {
            this.last.next = NewNod;
            this.last = NewNod;
        }
        this.length++;
        return this;
    }

    //return the firs node value in the queue
    peek() {
        return this.first.value;
    }

    //remove the firs node in the queue
    dequeue() {
        if (!this.first) {
            return null
        } else if (this.first === this.last) {
            this.last = null
        }
        const HoldingPointer = this.first;
        this.first = this.first.next;
        HoldingPointer.next = null;
        console.log("--> " + HoldingPointer.value + " => deleted");
        this.length--;
        return HoldingPointer;
    }

    //print the queue values
    printQueue() {
        let head = this.first;
        while (head != null) {
            console.log(head.value);
            head = head.next;
        }
    }
}

let myQueue = new QueueWithList()
myQueue.enqueue("js");
myQueue.enqueue("node");
myQueue.enqueue("python");
myQueue.enqueue("ruby");
myQueue.peek("ruby");
console.log("++++++++++++++++++++");
myQueue.printQueue();
console.log("--------------------");
myQueue.dequeue();//js
myQueue.printQueue();
console.log("--------------------");
myQueue.dequeue();//node
myQueue.printQueue();
console.log("--------------------");
myQueue.dequeue();//python
myQueue.printQueue();
console.log("--------------------");
myQueue.dequeue();//ruby
myQueue.printQueue();
console.log("++++++++++++++++");

