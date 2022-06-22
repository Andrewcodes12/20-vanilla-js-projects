/*
A graph is a structure containing a set of Nodes or Vertices
Where there can be edges between these nodes/vertices.

Edges can be directed or undirected.

trees are undirected Graphs


Graphs are commonly used to model relationship between unordered entities, such as

Friendship between people - Each node is a person and edges between nodes represent that
these two people are friends.

Distances between locations - Each node is a location and the edge between nodes represent
that these locations are connected. The value of the edge represent the distance.



You can be given a list of edges and you have to build your own graph from the edges
so that you can perform a traversal on them. The common graph representations are:

Adjacency matrix
Adjacency list
Hash table of hash tables



Time Complexity
v is the number of Vertices
E is the number of edges

Depth-First Search - O(V + E)
Breadth-First Search - O(V + E)



Ensure you are correctly keeping track of visited nodes and not visiting each node more than once.
Otherwise your code could end up in an infinite loop.



Graph search algorithms
Common - Breadth-first Search, Depth-first Search
Uncommon - Topological Sort, Dijkstra's algorithm
Almost never - Bellman-Ford algorithm, Floyd-Warshall algorithm, Prim's algorithm,
Kruskal's algorithm. Your interviewer likely don't know them either.










*/
