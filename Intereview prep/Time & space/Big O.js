/*
Big-O notation

1. the function should be defined in terms of the size of the input(s)
2. A smaller bigo function is more desireable than a larger one.
    - we want our algo to use a minial amount of time and memory.
3. Big o describes the worse case scenario, aka the upper bound.
    - we prepare our algos for the worset case.


we want our big-O notation to describe the performance of our algo with respect to the input size and nothing else.

- simplify products: drop all constants
- simplify sums: drop all constants

Always use the worst case

Big-O simplified

T(5 n^2) = O(n^2)
T(1000000 * n) = O(n)
T(42 n log(n)) = O(n log(n))
T(12) = O(1)


T(n^3 + n^2 + n) = O(n^3)
T (log(n) + 2^n) = O(2^n)
T(n + log(n)) = O(n)
T(n! + 10n) = O(n!)


T(5n^2 + 99n) = O(n^2)
T(2n + nlog(n)) = O(log(n))
T(2n + 5n^1000) = O(2n)




*/
