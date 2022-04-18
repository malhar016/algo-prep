

function minDistWithObstacles(region = [], src = '00', dest){
    const queue = [[src, 0]];
    const visited = new Set();
    const directions = [[-1, 0], [0,-1], [1,0], [0,1]];   // can move in 4 directions

    while(queue.length > 0){
        let [cur, dist] = queue.shift();

        if(cur === dest){
            return dist;
        }
        
        if(!visited.has(cur)){
            visited.add(cur);
            directions.forEach(direction => {
                const [x, y] = direction;
                const [i, j] = [+cur.charAt(0) + x, +cur.charAt(1) + y];
                if(region[i] && region[i][j] < 1) { // not an obstecle
                    queue.push([i + '' + j, dist + 1]);
                } 
            })
        }
    }
    
    return -1;
}


let region = [
    [0,1,0],
    [0,1,0],
    [0,0,0],
    [0,1,1],
    [0,0,0]
];

const dest = (region.length - 1) + '' + (region[0].length -1);

console.log(minDistWithObstacles(region, '00', dest));
