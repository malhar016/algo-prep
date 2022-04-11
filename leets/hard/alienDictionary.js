var alienOrder = function (words) {
  let letters = new Map();
  let hasRemaining = true;

  for (let j = 0; hasRemaining; j++) {
    hasRemaining = false;
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (j < word.length) {
        hasRemaining = true;
        let char = word.charAt(j);
        if (letters.has(char)) {
          if (letters.get(char) >= j) {
            return "";
          }
        } else {
          letters.set(char, j);
        }
      }
    }
  }
  return Array.of(...letters.keys()).join("");
};

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
