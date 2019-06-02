#!/usr/bin/nodejs
//node locate in your machine


//create Node class
class Node {
    constructor(value) {
        //you can add any item
        this.value = value;
    }
}

/*
*   ====> recommendation
*   yoy can implement stack
*   with ==> ARRAY <==
*   because of you will not need
*   shifting index in array
*   when you remove the last index
 */

class StackList {
    constructor() {
        this.ArrayStack = [];
    }

    //push new node into array
    push(value) {
        const NewNod = new Node(value);
        this.ArrayStack.push(NewNod)
        return this;
    }

    //return the the last array value
    peek() {
        return this.ArrayStack[this.ArrayStack.length-1].value;
    }

    //remove the last array element
    pop() {
        this.ArrayStack.pop();
        return this;
    }


    //print the stack&queue values
    printStack() {
        let Stack = this.ArrayStack;
        Stack.forEach(node=>{
            console.log(node.value);
        })
    }
}

let myStack = new StackList()
myStack.push("c");
myStack.push("c++");
myStack.push("c\#");
console.log(myStack.peek());
console.log("====================");
myStack.printStack();
myStack.pop();
myStack.pop();
myStack.pop();


