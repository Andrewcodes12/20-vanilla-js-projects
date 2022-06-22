/*
Each node in the tree can be connected to many children but must
be connected to 1 parent, except the root which has no parent.



a tree is an undirected and connected acyclic graph.
There are no cycles or loops.

each node can be like the roote node of its own subtree, making recursion useful for tree traversal.

Trees are commonly used to represent hierarchical data
- file systems
- JSON
- HTML docs

Common terms you need to know

Neighbor - Parent or child of a node
Ancestor - A node reachable by traversing its parent chain
Descendant - A node in the node's subtree
Degree - Number of children of a node
Degree of a tree - Maximum degree of nodes in the tree
Distance - Number of edges along the shortest path between two nodes
Level/Depth - Number of edges along the unique path between a node and the root node
Width - Number of nodes in a level

Binary Tree

Binary means two, so nodes in a binary tree can have a max of 2 children.

Binary tree terms

Complete binary tree - A complete binary tree is a binary tree in which every level,
except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.

Balanced binary tree - A binary tree structure in which the left and right subtrees of every node
differ in height by no more than 1.



BST (Binary Search tree)

Time complexity
Access - O(logn)
Search - O(logn)
Insert - O(logn)
Remove - O(logn)


space complexity of traversing balanced trees is O(h) where h is the height of the tree
traversing skewed trees(linked list) will be O(n)


Things to look out for during interviews
You should be very familiar with writing pre-order, in-order, and post-order traversal recursively.
As an extension, challenge yourself by writing them iteratively. Sometimes interviewers ask candidates
for the iterative approach, especially if the candidate finishes writing the recursive approach too quickly.


Common routines
Be familiar with the following routines because many tree questions make use of one
or more of these routines in the solution:

Insert value
Delete value
Count number of nodes in tree
Whether a value is in the tree
Calculate height of the tree
Binary search tree
Determine if is binary search tree
Get maximum value
Get minimum value



Techniques
Use recursion
Recursion is the most common approach for traversing trees. When you notice that the subtree problem
can be used to solve the entire problem, try using recursion.

When using recursion, always remember to check for the base case, usually where the node is null.

Sometimes it is possible that your recursive function needs to return two values.

Traversing by level
When you are asked to traverse a tree by level, use breadth-first search.

Summation of nodes
If the question involves summation of nodes along the way, be sure to check whether nodes can be negative.








*/
