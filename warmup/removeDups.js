// entere
/*

output = nter

e - 2
n - 1
t - 1
r - 1


*/

// 52
// 26 [0,0]
// o(size) o(unique(size))

// o(size ^ 2)/2

const removeDuplicates = (s) => {
    const map = new Map();
    let output = '';

    for(let i = 0; i < s.length; i++){
        let c = s[i];
        // i - 2
        // map - {a: 2, b: 1, }
        // output - ba
        if(map.get(c) === 2) {
            continue;
        } else if(map.get(c) === 1) {
            // logic of replacing
            output.replace(c, '');
            output.set(c, 2);  
        } else {
            map.set(c, 1);
        }
        output += c;
        
    }
    return output;
}