/**
 * 
 */

 var numIslands = function(grid) {
    let islands = 0;
    const visited = new Set();
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1' && !visited.has(i+','+j)){
                dfs(grid, i, j, visited);
                islands++;
            }
        }
    }
    
    return islands;
};

var directions = [[-1,0], [0,-1], [0,1], [1,0]];

function dfs(grid, i, j , visited){
    visited.add(i+','+j);
    directions.forEach(([x, y]) => {
       let [ni, nj] = [i + x, j + y];
       if(grid[ni] && grid[ni][nj] === '1' && !visited.has(ni+','+nj)){
           dfs(grid, ni, nj, visited);
       }
    });
}

const region = [
    ["1","0","0","1","1","1","0","1","1","0","0","0","0","0","0","0","0","0","0","0"],
["1","0","0","1","1","0","0","1","0","0","0","1","0","1","0","1","0","0","1","0"],
["0","0","0","1","1","1","1","0","1","0","1","1","0","0","0","0","1","0","1","0"],
["0","0","0","1","1","0","0","1","0","0","0","1","1","1","0","0","1","0","0","1"],
["0","0","0","0","0","0","0","1","1","1","0","0","0","0","0","0","0","0","0","0"],
["1","0","0","0","0","1","0","1","0","1","1","0","0","0","0","0","0","1","0","1"],
["0","0","0","1","0","0","0","1","0","1","0","1","0","1","0","1","0","1","0","1"],
["0","0","0","1","0","1","0","0","1","1","0","1","0","1","1","0","1","1","1","0"],
["0","0","0","0","1","0","0","1","1","0","0","0","0","1","0","0","0","1","0","1"],
["0","0","1","0","0","1","0","0","0","0","0","1","0","0","1","0","0","0","1","0"],
["1","0","0","1","0","0","0","0","0","0","0","1","0","0","1","0","1","0","1","0"],
["0","1","0","0","0","1","0","1","0","1","1","0","1","1","1","0","1","1","0","0"],
["1","1","0","1","0","0","0","0","1","0","0","0","0","0","0","1","0","0","0","1"],
["0","1","0","0","1","1","1","0","0","0","1","1","1","1","1","0","1","0","0","0"],
["0","0","1","1","1","0","0","0","1","1","0","0","0","1","0","1","0","0","0","0"],
["1","0","0","1","0","1","0","0","0","0","1","0","0","0","1","0","1","0","1","1"],
["1","0","1","0","0","0","0","0","0","1","0","0","0","1","0","1","0","0","0","0"],
["0","1","1","0","0","0","1","1","1","0","1","0","1","0","1","1","1","1","0","0"],
["0","1","0","0","0","0","1","1","0","0","1","0","1","0","0","1","0","0","1","1"],
["0","0","0","0","0","0","1","1","1","1","0","1","0","0","0","1","1","0","0","0"]
];

console.log(numIslands(region));