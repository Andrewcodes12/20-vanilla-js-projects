/*
A binary heap is a type of binary tree.
A heap is NOT a binary search tree
A heap is a patrially ordered Data Structure, whereas a BST is has a full order.

In a heap the root will be the MAX heap or the MIN heap.

In a heap, the children of a node must be less than or equal to the parent node

        42
       /  \
      32   24
    /   \  /  \
   30   9 20  18
   /\
   2 7


all children are less than or equal to the parent node



There is no guaranteed order among "siblings" in a heap.

In a max heap a node(root) will be greater than all of its children, grandchildren, and so on.
In a min heap a node(root) will be less than all of its children,grandchildren, and so on.


--------------------------------------------------------------------------------------
A heap is a specialized tree-based structure which is a complete tree

Max-Heap - in a max heap the value of a node must be greatest among the node values
in its entire subtree.

Min-Heap - in a min heap the value of the node must be the smallest among the node values
in its entire subtree.


Time complexity:
find max/min - O(1)
insert - O(logn)
remove - O(logn)










*/