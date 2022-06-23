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

In a max heap a node will be greater than all of its children, grandchildren, and so on.
In a min heap a node will be less than all of its children,grandchildren, and so on.
--------------------------------------------------------------------------------------
Complete trees

every complete tree is a balanced tree
not every balanced tree is a complete tree

complete

        42
       /  \
      32   24
    /   \  /  \
   30   9 20  18
   /\
   2 7

balanced but not complete


        42
       /  \
      32   24
    /   \    \
   30   9     18
--------------------------------------------------------------------------------------
When to use heaps
great for when a problem asks you to partially sort data.

usually problems that have us calculate the largest or smallest n numbers of a collection.

What if you were asked to find the largest 5 numbers in an array in linear time, O(n)? The fastest sorting algorithms
are O(nlogn), so none of those algorithms will be good enough.
However, we can use a heap to solve this problem in linear time.




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
