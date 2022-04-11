function isCyclic(V, adj) {
  let visited = Array(V).fill(0);
  let graph = new Map();
  for (let [source, destination] of adj) {
    graph.set(source, (graph.get(source) || new Set()).add(destination));
  }

  for (let node of graph.keys()) {
    if (visited[node] != 1) {
      if (checkCyclic(graph, visited, node)) {
        return true;
      }
    }
  }
  return false;
}

function checkCyclic(graph, visited, node) {
  if (visited[node] === 2) {
    return true;
  }
  visited[node] = 2;
  let destinations = graph.get(node) || [];
  for (let destination of destinations) {
    if (visited[destination] !== 1) {
      if (checkCyclic(graph, visited, destination)) {
        return true;
      }
    }
  }
  visited[node] = 1;
  return false;
}

console.log(
  isCyclic(4, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ])
);
