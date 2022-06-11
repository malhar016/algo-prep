const diffPossible = function(A, B){
    let n = A.length, i = 0; j = 0;
    
    while(j < n){
        if(i === j){
            j++;
        }
        console.log(i , j, ' diff: ', A[j] - A[i]);
        if(j < n && A[j] - A[i] === B){
            console.log(i , j);
            return 1;
        }
        if(A[j] - A[i] > B){
            i++;
        } else {
            j++;
        }
    }
    return 0;
};

console.log(diffPossible([-10, 2, 2, 3, 4, 5], 3));