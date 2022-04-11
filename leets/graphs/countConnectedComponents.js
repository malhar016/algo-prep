/**
 * 
 * 
 */

function getConnectedComponents(graph){
    let count = 0;
    const visited = new Set();

    for(let node in graph) {
        if(!visited.has(node)){
            bfs(graph, node, visited);
            count ++;
        }
    }

    return count;
}

function bfs(graph, node, visited){
    let queue = [node];
    while(queue.length > 0){
        let current = queue.shift();
        visited.add(current);
        for(let neighbour of graph[current] || []){
            if(!visited.has(neighbour)){
                queue.push(neighbour);
            }
        }
    }
}


let relations = [
    ["a", "e"],
    ["e", "f"],
    ["b", "d"],
    ["c", "g"],
    ["h", "i"],
    ["l", "j"],
    ["j", "g"],
    ["d", "k"]
]

function buildNonDirectedGraph(relations){
    let adjMatrix = {};
    relations.forEach(relation => {
        let [a, b] = relation;
        adjMatrix[a] = adjMatrix[a] ? [...adjMatrix[a], b] : [b];
        adjMatrix[b] = adjMatrix[b] ? [...adjMatrix[b], a] : [a];
    })
    return adjMatrix;
}

const graph = buildNonDirectedGraph(relations);

console.log(getConnectedComponents(graph));