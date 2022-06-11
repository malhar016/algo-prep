/**
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * Example 2:
 * 
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *  
 * 
 * Constraints:
 * 
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself. 
*/

var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0"){
        return "0";
    }
    
    let ans = "", products = [];
    let [n1, n2] = [num1.length - 1, num2.length - 1];

    for(let j = n2; j >= 0; j --){
        let p2 = num2.charAt(j);
        let parity = 0, product = [];
        if(p2 === '0') continue;
        for(let i = n1; i >= 0; i --){
            let p1 = num1.charAt(i);
            let multiple = Number(p2) * Number(p1) + parity;
            parity = Math.floor(multiple / 10);
            multiple = (multiple % 10);
            product.unshift(multiple);
        }
        if(parity > 0) product.unshift(parity);
        ans = addStrings(ans, appendZeroes(product.join(''), n2 - j));
    }
    return ans;
};

function addStrings(num1, num2){
    let [i, j] = [num1.length - 1, num2.length - 1];
    let addition = "", parity = 0, cur = 0;

    while(i >= 0 || j >= 0){
        cur = (Number(num1[i]) || 0) + (Number(num2[j]) || 0) + parity;
        parity = Math.floor(cur / 10);
        cur = cur % 10;
        addition = cur + addition;
        i--; j--;
    }
    if(parity > 0) addition = parity + addition;
    return addition;
}

function appendZeroes(s, zeroes){
    return s.concat(new Array(zeroes).fill(0).join(""));
}

console.log(multiply("5", "408"))
