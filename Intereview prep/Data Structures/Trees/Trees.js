/*
Trees are a common data structure which many other data structures are based.



trees are similar to singly linked list
instead of having a single next node; it might have more than 1 child node


A graph is a collection of nodes and any edges between those nodes.



tree - graph with no cycles
binary tree - tree where nodes have at most 2 nodes
root - the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent
internal node - a node that has children
leaf - a node that does not have any children
path - a series of nodes that can be traveled through edges - for example A, B, E is a path through the above tree

-----------------------------------------------------------------------------
What is a tree?
A tree if a graph that does not contain any cycles.
A cycle is defined as a path through edges that begins and ends at the same node.


-----------------------------------------------------------------------------
What is a Binary Tree?
a binary tree is a tree where nodes have at most 2 children.

- an empty graph of 0 nodes and 0 edges is a binary tree
- a graph of 1 node and 0 edges is a binary tree
- a linked list is a binary tree


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;








*/
