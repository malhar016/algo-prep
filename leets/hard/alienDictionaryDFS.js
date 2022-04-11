function alienOrder(words) {
  let graph = new Map();
  // 0 - non visited, 1 - processing, 2 - processed
  let visited = new Array(26).fill(0);

  words.reduce((prev, cur) => {
    let j = 0;
    while (j < prev.length) {
      if (j === cur.length) {
        return "";
      }
      // compare character by character
      let [prevChar, curChar] = [prev.charAt(j), cur.charAt(j)];
      if (prevChar !== curChar) {
        graph.set(prevChar, graph.get(prevChar) || new Set().add(curChar));
        return cur;
      }
      j++;
    }
    return cur;
  });
  let result = [];
  for (let node of graph.keys()) {
    if (visited[alphabeticalOrder(node)] !== 2) {
      if (!acyclicPostDFS(graph, visited, node, result)) {
        return "";
      }
    }
  }
  return result.join("");
}

const alphabeticalOrder = (char) => char.charCodeAt(0) - "a".charCodeAt(0);

function acyclicPostDFS(graph, visited, cur, result) {
  // console.log(result);
  let curIdx = alphabeticalOrder(cur);
  if (visited[curIdx] === 1) {
    return false;
  }
  visited[curIdx] = 1;
  let children = graph.get(cur) || [];
  for (let child of children) {
    if (!acyclicPostDFS(graph, visited, child, result)) {
      return false;
    }
  }
  if (!result.includes(cur)) {
    result.unshift(cur);
  }
  visited[curIdx] = 2;
  return true;
}

console.log(alienOrder(["z", "a", "z", "ett", "rftt"]));
