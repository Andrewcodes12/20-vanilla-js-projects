/*
like arrays a linked list is used to represent sequential data.

its a linear collection of data elements whose order is not given by their physical placement
in memory. unlike arrays where data is stored in sequential blocks of memory.

instead each element contains an address of the next element.

each node contains data and a reference to the next node

Advantages

insertion and deleton of a node are O(1)
- elements do not need to be shifted

disadvantages
access time is linear because we need to travserse from the start of the list to find a node.
we cannot key into the list ike we do arrays



Time complexity
Access - O(n)
Search - O(n)
Insert - O(1)
Remove - O(1)


Common routines
Be familiar with the following routines because many linked list questions make use of one or more
of these routines in the solution:

Counting the number of nodes in the linked list
Reversing a linked list in-place
Finding the middle node of the linked list using two pointers (fast/slow)
Merging two linked lists together

------------------------------------------------------------------------
Techniques

Dummy nodes
Adding a dummy node at the head and/or tail might help to handle cases where operations need to be
performed on the head or tail.
The dummy node ensures that operations are not done on the head or tail.

Two Pointers
used for many classic linked list problems

getting the Kth from last node - have 2 pointers where one is k nodes ahead of the other.
when the node ahead reaches the end, the other node is k nodes behind.


detecting cycles - have 2 pointers, one increments twice as much as the other,
if the 2 pointers meet, that means there is a cycle.

getting the middle node - have 2 pointers, where one pointer increments twice as much as the other.
when the faster node reaches the end, the slower will be at the middle.


Here are some common operations and how they can be achieved easily:

Truncate a list - Set the next pointer to null at the last element
Swapping values of nodes - Just like arrays, just swap the value of the two nodes, there's no need to swap the next pointer
Combining two lists - attach the head of the second list to the tail of the first list

*/
