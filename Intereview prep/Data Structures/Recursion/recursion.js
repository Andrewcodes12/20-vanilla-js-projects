/*
Recursion is a method of problem solving where the solution depends on solutions
to smaller instances of the same problem.

All recursive functions have 2 parts:
- a base case - defines when the recursion is stopped
- recursive call


------------------------------------------------------------------------
Things to look out for during interviews

Always remember to always define a base case so that your recursion will end.
Recursion is useful for permutation, because it generates all combinations and tree-based questions.
You should know how to generate all permutations of a sequence as well as how to handle duplicates.
Recursion implicitly uses a stack. Hence all recursive approaches can be rewritten iteratively using a stack.
Beware of cases where the recursion level goes too deep and causes a stack overflow (the default limit in Python is 1000).
 You may get bonus points for pointing this out to the interviewer. Recursion will never be O(1) space complexity because a stack is involved,
  unless there is tail-call optimization (TCO). Find out if your chosen language supports TCO.
Number of base cases - In the fibonacci example above, note that one of our recursive calls invoke fib(n - 2).
This indicates that you should have 2 base cases defined so that your code covers all possible invocations of the function within the input range.
If your recursive function only invokes fn(n - 1), then only one base case is needed






*/
