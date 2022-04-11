process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  input = input.split("\n");
  let n = input.splice(0, 1);
  let members = input.splice(0, n);
  let r = input.splice(0, 1);
  let relations = input.splice(0, r);
  relations = relations.reduce((acc, cur) => {
    let rel = cur.split(" ");
    acc.push(rel);
    return acc;
  }, []);
  // console.log(relations);
  let [source, destination] = input;

  let graph = new Map();
  relations.forEach(([src, dest]) => {
    graph.set(src, (graph.get(src) || new Set()).add(dest));
  });
  // console.log(graph);
  let result = hasPath(graph, source, destination);
  console.log(result);
  // process.stdout.write("Hi, " + result + ".\n");       // Writing output to STDOUT
}

function hasPath(graph, source, destination) {
  let queue = [],
    visited = new Set();
  queue.push(source);

  while (queue.length) {
    let cur = queue.shift();
    if (cur === destination) {
      return 1;
    }
    if (visited.has(cur)) {
      continue;
    }
    visited.add(cur);
    let children = graph.get(cur) || [];
    for (let child of children) {
      queue.push(child);
    }
  }
  return 0;
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
