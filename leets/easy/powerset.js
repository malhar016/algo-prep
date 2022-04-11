let powerSet = (input) => {
  let ps = [];
  // recursive IIFE
  (function psr(ip, i, cur) {
    if (i === ip.length) {
      ps.push(cur);
      return;
    }
    psr(ip, i + 1, cur + ip.charAt(i));
    psr(ip, i + 1, cur);
  })(input, 0, "");
  return ps;
};

console.log(powerSet("abc"));
