#!/usr/bin/nodejs
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const NewNode = new Node(value);
        NewNode.prev = this.tail;
        this.tail.next = NewNode;
        this.tail = NewNode;
        this.length++;
        return this
    };

    prepend(value) {
        const NewNode = new Node(value)
        this.head.prev = NewNode;
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
        let follower = leader.next;
        leader.next = NewNode;
        NewNode.prev = leader;
        NewNode.next = follower;
        follower.prev = NewNode;
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
        const unWanted = leader.next;
        leader.next = unWanted.next;
        unWanted.prev.next = unWanted.next;
        unWanted.next.prev = unWanted.prev;
        this.length--;
        return this.printList();
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this
    }
}

let myLinkedList = new DoubleLinkedList(1)

myLinkedList.append(2);
myLinkedList.prepend(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.insert(2, 20);
myLinkedList.remove(1);
console.log("======================");
myLinkedList.reverse();
myLinkedList.printList()
