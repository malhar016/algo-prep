/**
 * 
 * Given a weighted, undirected and connected graph of V vertices and E edges, Find the shortest distance of all the vertex's from the source vertex S.
 * Note: The Graph doesn't contain any negative weight cycle.
 * 
 * @param {vertices} V of directed, ucyclic, weighted graph
 * @param {adecency list} Adj 
 * @param {souce} S 
 * @returns array with shortes path from source to each node
 */



function dijkstra(V,Adj,S)
{
  const shortestPaths = new Array(V);
  shortestPaths[0] = 0;
  const sources = [S];
  while(sources.length) {
      let allEdges = findAllEdges(Adj, sources);
      let minEdge = findNextMinEdge()
      sources.push(minEdge[1]);
  }
}



function detectCycle(graph){
   const visited = {};  // key = node, val = V-visited, C-completed
   for(let node in graph){
       if(!visited[node]){
           if(dfs(graph, node, visited)) {
               return true;
           }
       }
   }
}

function dfs(graph, node, visited){
  if(visited?.node === 'V'){
      return true;
  }
  visited[node] = 'V';
  for(let neighbour of graph[node] || []){
    if(!visited?.neighbour){
        if(dfs(graph, neighbour, visited)){
            return true;
        }
        visited[node] = 'C'
    }
  }


}

function prepareGraph(relations){
    let adjMatrix = {};
    relations.forEach(([a, b, dist]) => {
        adjMatrix[a] = !adjMatrix[a] ? [[b, dist]] : adjMatrix[a].push([b, dist]);
    })
    return adjMatrix;
}

let relations = [
    ["0", "1", 4],
    ["0", "7", 8],
    ["1", "7", 11],
    ["1", "2", 8],
    ["7", "8", 7],
    ["7", "6", 1],
    ["2", "3", 7],
    ["2", "5", 4],
    ["2", "8", 2],
    ["8", "6", 6],
    ["6", "5", 2],
    ["3", "4", 9],
    ["3", "5", 15],
    ["5", "4", 10]
];