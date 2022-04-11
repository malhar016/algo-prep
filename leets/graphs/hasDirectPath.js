/**
 * given are the nodes and edges to the non-directed graph 
 * find out if there is direct path available from A to F and A to J
 * 
 * 
 * 
 */

 const relations = [
    ["a", "b"],
    ["a", "c"],
    ["b", "d"],
    ["c", "e"],
    ["e", "b"],
    ["f", "d"],
    ["j", "i"]
];

function hasPath(graph, src, dest, visited) { //DFS
    if(src === dest){
        return true;
    }

    visited.add(src);

    for(let neighbour of graph[src] || []){
        if(!visited.has(neighbour)){
            if(hasPath(graph, neighbour, dest, visited)){ // really really imp line- 
                return true; //  // return true only if it has path or else continue with other neighbours
            } 
        }
    }

    return false;
}

function buildNonDirectedGraph(relations){
    const adjMatrix = {};
    relations.forEach(relation => {
        let [a, b] = relation;
        adjMatrix[a] = adjMatrix[a] ? [...adjMatrix[a], b] : [b];
        adjMatrix[b] = adjMatrix[b] ? [...adjMatrix[b], a] : [a];
    });
    return adjMatrix;
}

const graph = buildNonDirectedGraph(relations);

console.log(hasPath(graph, "a", "e", new Set()));
console.log(hasPath(graph, "a", "i", new Set()));
