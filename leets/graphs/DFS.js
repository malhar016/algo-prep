/*

In depth first search we always take one dept/branch from source node and continue traversing
until we hit the dead end - (while putting other branches deep into the stack)

Finally we keep doing above step until our stack is empty

Directed acyclic graph doesn't need to maintain visitedSet while performing DSF

DFS can be performed by both stack and recursion (which is again function calls in stack)

There can be two types of inputs for any graph problem
1) adjacency matrix - easier
2) nodes and edge list - need to prepare our own adjacency matrix

*/

function dfs(graph, source){
    console.log('source:', source);
    for(let neighbour of graph[source] || []){
        dfs(graph, neighbour);
    }
}

function dfsWithStack(graph, source){
    const stack = [source];

    while(stack.length > 0){
        let current = stack.pop();
        console.log(current);
        for(let neighbour of graph[current] || []){
            stack.push(neighbour);
        }
    }
}

function prepareGraph(relations) {
    const adjMatrix = {};
    relations.forEach(relation => {
        let [ node , edge ] = relation;
        let neighbours = adjMatrix[node];
        adjMatrix[node] = neighbours ? [...neighbours, edge] : [edge]; 
    })
    return adjMatrix;
}

let relations = [
    ["a", "b"],
    ["a", "c"],
    ["b", "d"],
    ["c", "e"],
    ["e", "b"],
    ["f", "d"]
];

const graph = prepareGraph(relations);


dfs(graph, "a");
dfsWithStack(graph, "a");