/*
BST offers
O(log n) search
O(log n) Insertion and Deletion


Node: A tree component that contains one value and pointers to other nodes
Edge: Another name for a pointer
Root node: The top node in a tree
Parent/child node: A parent node points to child nodes
Neighbor: Either a parent or child node
Subtree: A tree whose root is the child of another node in the tree
Branch node: A node with at least one child node
Leaf node: A node with no children
Level: The number of edges between a given node and the root node
Width: The number of nodes in a given level
Height: The number of edges between the root node and the bottom-most node

---------------------------------------------------------------------------
Properties of a BST

every node in the left branch is less than the value of the node itself
every node in the right branch is greater than the node value


if values are equal:
Discard the duplicate, similar to a set
Place equal values to the left
Place equal values to the right

---------------------------------------------------------------------------
Searching a BST
If the root node is null, return false
If the root node's value equals the target, return true.
If the target is less than the root value, recursively search the left child
If the target is greater than the root value, recursively search the right child

function searchBST(root,target){
    if(!root) return false

    if(root.value === target) return true

    if(target < root.value) return searchBST(root.left, target)

    if(target > root.value) return searchBST(root.right, target)
}

function searchBST(root,target){
    let currentNode = root

    while(current){
        if(currentNode.value === target) return true
        if (target < currentNode.value) currentNode = currentNode.left
        if(target > currentNode.value) currentNode = currentNode.right
    }

    return false
}
*/
