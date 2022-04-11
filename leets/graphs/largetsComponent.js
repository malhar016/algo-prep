/**
 * 
 */

function getLargestComponent(graph){
    const visited = new Set();
    let max = 0;

    for(let node in graph){
        if(!visited.has(node)){
            let cursize = dfs(graph, node, visited, 1);
            console.log(cursize);
            max = cursize > max ? cursize : max;
        }
    }

    return max;
}

function dfs(graph, node, visited){
    let size = 1;
    if(!visited.has(node)){
        visited.add(node);
        for(let neighbour of graph[node] || []){
            if(!visited.has(neighbour)){
               size = size + dfs(graph, neighbour, visited);
            }
        }
    }
    return size;
}


const relations = [
    ["a", "e"],
    ["e", "f"],
    ["b", "d"],
    ["c", "g"],
    ["h", "i"],
    ["l", "j"],
    ["j", "g"],
    ["d", "k"],
    ["e", "k"],
    ["m", "h"]
];

function buildNonDirectedGraph(relations){
    let adjMatrix = {};
    relations.forEach(relation => {
        let [a, b] = relation;
        adjMatrix[a] = adjMatrix[a] ? [...adjMatrix[a], b] : [b];
        adjMatrix[b] = adjMatrix[b] ? [...adjMatrix[b], a] : [a];
    });
    return adjMatrix;
}

const graph = buildNonDirectedGraph(relations);

console.log(getLargestComponent(graph));