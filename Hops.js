/*
A family of frogs in a pond are traveling towards dry land to hibernate. They hope to do so by hopping across a trail of NN lily pads, numbered from 11 to NN in order.
There are FF frogs, numbered from 11 to FF. Frog ii is currently perched atop lily pad P_iP 
i
​
 . No two frogs are currently on the same lily pad. Lily pad NN is right next to the shore, and none of the frogs are initially on lily pad NN.
Each second, one frog may hop along the trail towards lily pad NN. When a frog hops, it moves to the nearest lily pad after its current lily pad which is not currently occupied by another frog (hopping over any other frogs on intermediate lily pads along the way). If this causes it to reach lily pad NN, it will immediately exit onto the shore. Multiple frogs may not simultaneously hop during the same second.
Assuming the frogs work together optimally when deciding which frog should hop during each second, determine the minimum number of seconds required for all FF of them to reach the shore.
Constraints
2 \le N \le 10^{12}2≤N≤10 
12
 
1 \le F \le 500{,}0001≤F≤500,000
1 \le P_i \le N-11≤P 
i
​
 ≤N−1
Sample Test Case #1
N = 3
F = 1
P = [1]
Expected Return Value = 2
Sample Test Case #2
N = 6
F = 3
P = [5, 2, 4]
Expected Return Value = 4
Sample Explanation
In the first case, there are 33 lily pads and 11 frog. The frog is initially atop lily pad 11 and will take 22 hops to reach lily pad 33.
In the second case, there are 66 lily pads, with frogs on lily pads 55, 22, and 44. Initially the lily pads and frog numbers can be represented as .2.31.
One optimal sequence of hops is:
Frog 22 hops forward to lily pad 33: 
..231.
Frog 22 hops over frogs 11 and 33, onto lily pad 66 and exiting onto the shore: 
...31.
Frog 33 hops over frog 11, onto lily pad 66 and exiting onto the shore: 
....1.
Frog 11 hops onto lily pad 66, exiting onto the shore
*/

function getSecondsRequired(N, F, P) {
  let pads = new Array(N).fill(0);
  N--; // to match with zero based index
  let jumping = true;
  let firstFrog = N,
    lastFrog = 0,
    nextPad = 0,
    tick = 0;

  P.forEach((position) => {
    position--; // to match with zero based indexs
    firstFrog = firstFrog > position ? position : firstFrog;
    lastFrog = lastFrog < position ? position : lastFrog;
    pads[position] = 1;
  });

  while (jumping) {
    nextPad = pads.indexOf(0, firstFrog);
    jumping =
      nextPad > 0 && nextPad < lastFrog
        ? jumpTo(firstFrog, nextPad, pads)
        : false;
    firstFrog = pads.indexOf(1, firstFrog);
    tick = jumping ? tick + 1 : tick;
  }
  return N - lastFrog + F + tick - 1;
}

function jumpTo(frog, next, allPads) {
  allPads[next] = 1;
  allPads[frog] = 0;
  return true;
}

console.log(getSecondsRequired(6, 3, [5, 2, 4]));
