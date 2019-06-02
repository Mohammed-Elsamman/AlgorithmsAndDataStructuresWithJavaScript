#!/usr/bin/nodejs
class Node {
    constructor(value) {
        this.value = value;
        this.right = null
        this.left = null
    }
}

/*
************(TREE)*************
*   the point of tree that you
*   will insert in any index fast
*   and remove from anu index fast
*   and it will be sorted
*   and with flexible size
*/


class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        //create a new node
        const NewNode = new Node(value);
        //empty node
        if (this.root === null) {
            this.root = NewNode;
            return this;
        } else {
            let CurrentNode = this.root;
            let flag = 0;
            //(while) => because you did not know how many nodes in the tree
            while (flag === 0) {
                //inserted value >= the current node value
                if (value >= CurrentNode.value) {
                    //there is no right for it (the end)
                    if (!CurrentNode.right) {
                        CurrentNode.right = NewNode;
                        return this
                    }
                    //or
                    CurrentNode = CurrentNode.right;
                } else {
                    //there is no left for it (the end)
                    if (!CurrentNode.left) {
                        CurrentNode.left = NewNode;
                        return this
                    }
                    //or
                    CurrentNode = CurrentNode.left;
                }
            }
        }
    }

    lookup(value) {
        //empty node
        if (this.root === null) {
            return false;
        } else {
            let CurrentNode = this.root;
            //(while) => because you did not know how many nodes in the tree
            while (CurrentNode) {
                //lookup value < the current node value
                if (value < CurrentNode.value) {
                    CurrentNode = CurrentNode.left;
                } else if (value > CurrentNode.value) {
                    //lookup value > the current node value
                    CurrentNode = CurrentNode.right;
                } else {
                    //lookup value === the current node value
                    console.log("we found " + CurrentNode.value);
                    return CurrentNode
                }
            }
            //end of else and we did not find the value we lookup for it
            console.log(value + " dose not exist");
            return false
        }

    }

    remove(value) {
        //empty node
        if (!this.root) {
            console.log("no nodes");
        } else {
            let CurrentNode = this.root;
            //find the parent of the node we will delete it
            //to re connect the tree after delete the node
            let parentNode = null;
            //while ==> why???? think || remember
            while (CurrentNode) {
                //value > node value || < node value... ==> it's easy
                if (value < CurrentNode.value) {
                    parentNode = CurrentNode;
                    CurrentNode = CurrentNode.left;
                } else if (value > CurrentNode.value) {
                    parentNode = CurrentNode;
                    CurrentNode = CurrentNode.right;
                } else {
                    /*
                    *   here we found the node
                    *   focus here and try it with your self
                    */

                    //  if it has NOT right node child
                    if (!CurrentNode.right) {
                        if (!parentNode) { //parent === null
                            this.root = CurrentNode.left;
                        } else {
                            //current node value < parent value >>go left
                            if (CurrentNode.value < parentNode.value) {
                                parentNode.left = CurrentNode.left
                            } else if (CurrentNode.value > parentNode.value) {
                                parentNode.right = CurrentNode.right
                            }
                        }
                        /*
                        *   if it has right node child
                        *   ===> but the right child
                        *   does NOT has left child
                        */
                    } else if (!CurrentNode.right.left) {
                        //the same steps
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
                        /*
                        *   last option
                        *   the right child that has a left child
                        */
                    } else {
                        //find the right child's left
                        let leftMost = CurrentNode.right.left;
                        let leftMostParent = CurrentNode.right;
                        while (leftMost.left) {
                            leftMostParent = leftMost;
                            leftMost = leftMost.right;
                            //we change the subtree of the tree by looping
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
