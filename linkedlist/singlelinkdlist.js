#!/usr/bin/nodejs
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const NewNode = new Node(value);
        this.tail.next = NewNode;
        this.tail = NewNode;
        this.length++;
        return this
    };

    prepend(value) {
        const NewNode = new Node(value)
        NewNode.next = this.head;
        this.head = NewNode;
        this.length++
        console.log(this);
        return this
    };

    printList() {
        let head = this.head;
        while (head != null) {
            console.log(head.value);
            head = head.next;
        }
    }

    insert(index, value) {
        //check if the index equal to the length of the list
        if (index >= this.length) {
            return this.append(value)
        }
        //check if the index equal to zero
        if (index === 0) {
            return this;
        }
        //create a new node with node class
        const NewNode = new Node(value);
        //find the index
        const leader = this.findIndex(index - 1);
        let HoldPointer = leader.next;
        leader.next = NewNode;
        NewNode.next = HoldPointer;
        this.length++;
        return this;
    }
    //find the index you will insert or delete in it
    findIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        //check if the index doesn't exist or equal zero
        if (index >= this.length || index === 0) {
            return this
        }
        //find the index you will insert or delete in it
        let leader = this.findIndex(index - 1);
        console.log(leader);
        const unWanted = leader.next;
        leader.next = unWanted.next;
        this.length--;
        return this.printList();

    }
}

let myLinkedList = new LinkedList(1)

myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.insert(0, 10);
myLinkedList.insert(4, 20);
myLinkedList.printList()
myLinkedList.remove(0);
myLinkedList.remove(1);
// myLinkedList.printList()
