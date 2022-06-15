/*
O log n is efficient code

a log is the inverse of an exponent

the log base n of a number is how many times it must be divided by n to reach 1


a code is O(log n) when:
- the choice of the next element on which to perform some action is one of several possibilities
      - and -
- only one will need to be chosen

      - or  -
- the elements on which the action is performed are digits on n


looking up people in a phone book is O(log n)
you dont need to check every person in the phone book; you divide and conquer.


phone book examples:
O(1) (worst case) - given a page that a businesses name is on and the business name, find the phone number

O(1) (average case) - given a page that a name is on and their name, find the phone number

O(log n) - given a persons name, find the phone number by picking a random point about halfway through the part of the book
you havent searched. divide and conquer

O(n): Find all people whose phone numbers contain the digit "5".

O(n): Given a phone number, find the person or business with that number.

O(n log n): There was a mix-up at the printer's office, and our phone book had all its pages inserted in a random order.
Fix the ordering so that it's correct by looking at the first name on each page and then putting that page in the
appropriate spot in a new, empty phone book.

*/
