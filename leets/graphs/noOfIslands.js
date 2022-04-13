/**
 * 
 */

function countIslands(region){
    const visited = new Set();
    let islands = 0;
    const neighbours = [[0,1],[1,1],[1,0],[1,-1],
                        [0,-1],[-1,-1],[-1,0],[-1,1]];

    for(let i = 0; i < region.length; i++){
        for(let j = 0; j < region.length; j++){
            if(region[i][j] === 1 && !visited.has(i + '' + j)){
                islands ++;
                dfs(region, i, j, visited, neighbours);
            }
        }
    }
    return islands;
}

function dfs(region, i, j, visited, neighbours){
    if(region[i] && region[i][j] === 1 && !visited.has(i + '' + j)){
        visited.add(i + '' + j);
        neighbours.forEach(neighbour => {
            const [a, b] = neighbour;
            dfs(region, i + a, j + b, visited, neighbours);
        });
    }
}

const region = [
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [1,0,0,0,1,0],
    [0,0,1,0,1,1],
    [1,1,1,0,0,0]
];

console.log(countIslands(region));