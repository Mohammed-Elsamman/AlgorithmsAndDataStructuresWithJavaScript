#!/usr/bin/nodejs

/*
implement of undirected unweighted and cyclic graph
 3-----------4-----------5
 |           |           |
 |           |           |
 |           |           |
 1-----------2           6
  \         /
   \       /
    \     /
     \   /
      \ /
       0
*/


class Graph {
    constructor() {
        this.numOfNodes = 0;
        this.adjacentList = {};
    };
    // add the node in the list
    addVertex(node) {
        this.adjacentList[node] = [];
        this.numOfNodes++;
    }
    //here we will add teh edge for every node
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const myGraph = this.adjacentList;
        "dddd".replace("sd", "sd")
        for (let item in myGraph) {
            console.log(`${item} -> ${myGraph[item].join().replace(/,/g," & ")}`)
        }

    }
}

const myGraph = new Graph();

myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");
myGraph.showConnections();
// console.log(myGraph);
