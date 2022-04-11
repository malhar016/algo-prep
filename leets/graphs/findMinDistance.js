/**
 *
 */

function findMinDistance(graph, src, dest) {
  const visited = new Set();
  return bfs(graph, src, dest, visited) ?? -1;
}

function bfs(graph, src, dest, visited) {
  let queue = [[src, 0]];
  while (queue.length > 0) {
    let [cur, dist] = queue.shift();
    if (cur === dest) {
      return dist;
    }
    visited.add(cur);
    for (let neighbour of graph[cur] || []) {
      if (!visited.has(neighbour)) {
        queue.push([neighbour, dist + 1]);
      }
    }
  }
}

let relations = [
  ["a", "l"],
  ["o", "p"],
  ["q", "z"],
  ["c", "j"],
  ["j", "o"],
  ["c", "b"],
  ["q", "o"],
  ["l", "c"],
  ["a", "z"],
];

function buildUnDirectedGraph(relations) {
  const adjMatrix = {};
  relations.forEach(relation => {
    const [a, b] = relation;
    adjMatrix[a] = adjMatrix[a] ? [...adjMatrix[a], b] : [b];
    adjMatrix[b] = adjMatrix[b] ? [...adjMatrix[b], a] : [a];
  });
  return adjMatrix;
}

const graph = buildUnDirectedGraph(relations);

console.log(graph, "a", "p");
console.log(findMinDistance(graph, "a", "p"));