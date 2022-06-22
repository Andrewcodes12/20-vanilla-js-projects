/*
Many tips that apply to Arrays apply to strings.


Time Complexity
Access - O(1) -- assuming we have the index
search - O(n)
insert - O(n)
remove - O(n)


--------------------------------------------------------------
Operations involving another string

Find Substring - O(n.m)
concatenating strings - O(n+m)
slice - O(m)

------------------------------------------------------------------------
Things to look out for in interviews

Ask about input character set and case sensitivity.
usually the characters are limited to lower case characters.

------------------------------------------------------------------------
Techniques

Counting Characters
Count the frequency of characters in a string
use a hashmap

space required for a character counter is O(1)
because the range of characters is usually a fixed constant.


String of Unique characters


Anagram
a couple approaches:
- sorting both strings - O(nlogn) time and O(logn) space
- frequency counting using a hashmap - O(n) time O(1) space



Palindromes
a word of phrase that read the same forward or backwards
a couple approaches:
- reverse the string and it should be equal to itself
- have 2 pointers at the start and end of the string. move pointers inward until they meet.
At every point in time the characters at both pointers should match.






*/
