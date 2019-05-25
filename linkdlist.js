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
        // if (index > this.length - 1) {
        //     console.log(`index of ${index} does not existing`)
        // } else if (index == 0) {
        //     this.prepend(value)
        // } else if (index == this.length - 1) {
        //     this.append(value)
        // } else {
        //     const NewNode = new Node(value)
        //     let head = this.head;
        //     let NumIndex = 0;
        //     while (head != null) {
        //         if (index - 1 == NumIndex) {
        //             let HoldPointer = head.next;
        //             head.next = NewNode;
        //             NewNode.next = HoldPointer;
        //             this.length++;
        //         } else {
        //             head = head.next;
        //         }
        //         NumIndex++;
        //     }
        // }

        if (index >= this.length) {
            return this.append(value)
        }
        if (index === 0) {
            return this;
        }
        const NewNode = new Node(value);
        const leader = this.findIndex(index - 1);
        let HoldPointer = leader.next;
        leader.next = NewNode;
        NewNode.next = HoldPointer;
        this.length++;
        return this;
    }

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
        if (index >= this.length || index === 0) {
            return this
        }
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
