/*
Subarray - [2,3,6,1,5,4]
[3,6,1] is a subArray
[3,1,5] is a subsequence

Time complexity-
Access - 0(1) if you have the index
Search - 0(n)
search(sorted) - O(logn)
insert - O(n)
insert at end - O(1)
remove - O(n)
remove from back - O(1)

------------------------------------------------------------------------
Things to look out for in interviews

Clarify if there are duplicate values in the array. Would the presence of duplicate values affect the answer?
Does it make the question simpler or harder?
When using an index to iterate through array elements, be careful not to go out of bounds.
Be mindful about slicing or concatenating arrays in your code.
Typically, slicing and concatenating arrays would take O(n) time.
Use start and end indices to demarcate a subarray/range where possible.

------------------------------------------------------------------------
Techniques

Sliding Window
Applies to many subarray/substring problems.
2 pointers usually move in the same direction but never overtake eachother.
time complexity O(n)


Two Pointers
like sliding windows but the 2 pointers can cross eachother and can be on different arrays.
When given 2 arrays to process, its common to have 1 pointer per array to compare both indexes
from the 2 arrays

Sorting the array
is the array sorted or partially sorted? if it is use some form of binary search.
This means the interviewer is looking for something faster than O(n)
*/
