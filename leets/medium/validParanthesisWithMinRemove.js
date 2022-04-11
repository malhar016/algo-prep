var minRemoveToMakeValid = function (s) {
  let chars = s.split(""),
    match = [],
    pairs = [];
  let [open, close] = ["(", ")"];

  for (let i = 0; i < chars.length; i++) {
    let c = chars[i];
    if (c === open) {
      pairs.push([i]);
    } else if (c === close) {
      let last = pairs.pop();
      if (last) {
        last.push(i);
        match.push(...last);
      }
    }
  }
  console.log(match);
  match.sort((a, b) => a - b);
  let result = [];
  for (let i = 0, j = 0; i < chars.length; i++) {
    let c = chars[i];
    if (c === open || c === close) {
      if (j < match.length && i === match[j]) {
        result.push(c);
        j++;
      }
    } else {
      result.push(c);
    }
  }
  return result.join("");
};

console.log(minRemoveToMakeValid(")i()()((fm(((()"));
