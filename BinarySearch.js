#!/usr/bin/nodejs
class Node {
    constructor(value) {
        this.value = value;
        this.right = null
        this.left = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const NewNode = new Node(value);

        if (this.root === null) {
            this.root = NewNode;
            return this;
        } else {
            let CurrentNode = this.root;
            let flag = 0;
            while (flag === 0) {
                if (value >= CurrentNode.value) {
                    if (!CurrentNode.right) {
                        CurrentNode.right = NewNode
                        return this
                    }
                    CurrentNode = CurrentNode.right;
                } else {
                    if (!CurrentNode.left) {
                        CurrentNode.left = NewNode;
                        return this
                    }
                    CurrentNode = CurrentNode.left;
                }
            }
        }
    }

    lookup(value) {
        if (this.root === null) {
            return false;
        } else {
            let CurrentNode = this.root;
            while (CurrentNode) {
                if (value < CurrentNode.value) {
                    CurrentNode = CurrentNode.left;
                } else if (value > CurrentNode.value) {

                    CurrentNode = CurrentNode.right;
                } else {
                    console.log("we found " + CurrentNode.value);
                    return CurrentNode
                }
            }
            console.log(value + " dose not exist");
            return false
        }

    }

    remove(value) {
        if (!this.root) {
            console.log("no nodes");
        } else {
            let CurrentNode = this.root;
            let parentNode = null;
            while (CurrentNode) {
                if (value < CurrentNode.value) {
                    parentNode = CurrentNode;
                    CurrentNode = CurrentNode.left;
                } else if (value > CurrentNode.value) {
                    parentNode = CurrentNode;
                    CurrentNode = CurrentNode.right;
                } else {

                    if (!CurrentNode.right) {
                        if (!parentNode) {
                            this.root = CurrentNode.left;
                        } else {
                            if (CurrentNode.value < parentNode.value) {
                                parentNode.left = CurrentNode.left
                            } else if (CurrentNode.value > parentNode.value) {
                                parentNode.right = CurrentNode.right
                            }
                        }

                    } else if (!CurrentNode.right.left) {
                        if (!parentNode) {
                            this.root = CurrentNode.left;
                        } else {
                            CurrentNode.right.left = CurrentNode.left;
                            if (CurrentNode.value < parentNode.value) {
                                parentNode.left = CurrentNode.left
                            } else if (CurrentNode.value > parentNode.value) {
                                parentNode.right = CurrentNode.right
                            }
                        }
                    } else {
                        let leftMost = CurrentNode.right.left;
                        let leftMostParent = CurrentNode.right;
                        while (leftMost.left) {
                            leftMostParent = leftMost;
                            leftMost = leftMost.right;
                        }
                        leftMostParent.left = leftMost.right;
                        leftMost.left = CurrentNode.left;
                        leftMost.right = CurrentNode.right;
                        if (!parentNode) {
                            this.root = leftMost;
                        } else {
                            if (CurrentNode.value < parentNode.value) {
                                parentNode.left = leftMost;
                            } else if (CurrentNode.value > parentNode.value) {
                                parentNode.right = leftMost;
                            }
                        }
                        console.log("we found and remove" + CurrentNode.value);
                    }

                    return CurrentNode
                }
            }
            console.log(value + " dose not exist");
            return false
        }
    }

    pariant(value) {

    }
}

let myTree = new BinaryTree();
myTree.insert(5);
myTree.insert(6);
myTree.insert(7);
myTree.insert(3);
console.log("----------------------------");
myTree.lookup(3);
console.log("----------------------------");
myTree.lookup(37);
console.log("----------------------------");
myTree.lookup(7);
console.log("================================");
myTree.remove(6);

function traverse(node) {
    const tree = {value: node.value}
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree;

}

JSON.stringify(traverse(myTree.root));
