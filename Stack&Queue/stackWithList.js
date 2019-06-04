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
************(FILO)*************
*   the point of stack that you
*   will insert in the last of it
*   and remove from the last too
 */



class StackWithList {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    //push new node into Stack&Queue
    push(value) {
        const NewNod = new Node(value);
        if (this.length === 0) {
            this.top = NewNod;
            this.bottom = NewNod;
        } else {
            const HoldingPointer = this.top;
            this.top = NewNod;
            this.top.next = HoldingPointer;
        }
        this.length++;
        return this;
    }

    //return the top node value
    peek() {
        return this.top.value;
    }

    //remove the top node
    pop() {
        if (!this.top) {
            return null
        } else if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }


    //print the Stack&Queue values
    printStack() {
        let head = this.top;
        while (head != null) {
            console.log(head.value);
            head = head.next;
        }
    }
}

let myStack = new StackWithList()
myStack.push("js");
myStack.push("node");
myStack.push("python");
console.log(myStack.peek());
console.log("====================");
myStack.printStack();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);

