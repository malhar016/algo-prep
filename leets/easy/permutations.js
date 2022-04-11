const swap = (ip, a, b) => ([ip[a], ip[b]] = [ip[b], ip[a]]);

const permutations = (input) => {
  let pmts = [];

  (function permute(ip, l, r) {
    if (l == r) {
      pmts.push(ip.join(""));
      return;
    }
    for (let i = l; i < r; i++) {
      swap(ip, l, i);
      permute(ip, l + 1, r);
      swap(ip, l, i);
    }
  })(input, 0, input.length);
  return pmts;
};

console.log(permutations(["a", "b", "c"]));
