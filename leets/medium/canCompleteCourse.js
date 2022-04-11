var canFinish = function (numCourses, prerequisites) {
  let graph = new Map();

  for (let prerequisite of prerequisites) {
    let [pending, completed] = prerequisite;
    if (!graph.has(pending)) {
      graph.set(pending, []);
    }
    graph.get(pending).push(completed);
  }

  let visited = Array(numCourses).fill(false);

  for (let pending of graph.keys()) {
    if (hasCycle(graph, [...visited], pending)) {
      return false;
    }
  }
  return true;
};

var hasCycle = function (graph, visited, cur) {
  let nodes = [];
  if (graph.has(cur)) {
    visited[cur] = true;
    nodes = graph.get(cur);
  }

  for (let i = 0; i < nodes.length; i++) {
    if (visited[nodes[i]]) {
      return true;
    } else {
      visited[nodes[i]] = true;
      return hasCycle(graph, visited, nodes[i]);
    }
  }
};

console.log(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ])
);
