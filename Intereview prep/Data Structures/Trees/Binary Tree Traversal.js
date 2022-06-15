/*
For most operations on a tree, you need to either traverse the tree and visit or evaluate every node
or search the tree and stop when you find what youre looking for


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


-----------------------------------------------------------------------------
Searching a BT

function binaryTreeSearch(root,target){

    // Base case: If the tree is null, return false
    if(!root) return false

    // If the current node's value equals the target, return true
    if(root.value === target) return true

    // Otherwise, search the left subtree for the target
    if(binaryTreeSearch(root.left,target)) return true

    // If the value isn't in the left subtree, try the right subtree
    return binaryTreeSearch(root.right,target)
}


-----------------------------------------------------------------------------
depth first traversal
can use recursion for depth first because depth 1st and recursion use a stack

Pre-order traversal
Print the current node value
Recursively call the left subtree
Recursively call the right subtree

In-order traversal
Recursively call the left subtree
Print the current node value
Recursively call the right subtree

Post-order traversal
Recursively call the left subtree
Recursively call the right subtree
Print the current node value

function depthFirstTraversalroot) {

    // Put the starting node in a stack
    const stack = []
    stack.push(root);

    // While the stack is not empty
    while (stack.length > 0) {

        // pop a node and print it
        let node = queue.pop();
        console.log(node.value);

        // Put all of the node's children in the back of the stack
        stack.push(node.left);
        stack.push(node.right);
    }
}


-----------------------------------------------------------------------------
Breadth first traversal
cannot use recursion because BFS uses a queue

function breadthFirstTraversal(root) {

    // Put the starting node in a queue
    const queue = []
    queue.push(root);

    // While the queue is not empty
    while (queue.size > 0) {

        // Dequeue a node and print it
        let node = queue.shift();
        console.log(node.value);

        // Put all of the node's children in the back of the queue
        queue.push(node.left);
        queue.push(node.right);
    }
}






*/
