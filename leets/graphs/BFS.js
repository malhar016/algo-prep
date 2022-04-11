/**
 * Read the DFS first for basic understanding of graph
 * 
 * In BFS
 */

function bfs(graph, source){
    const queue = [source];

    while(queue.length > 0){
        let current = queue.shift();
        console.log(current);

        for(let neighbour of graph[current] || []){
            queue.push(current);
        }
    }
}