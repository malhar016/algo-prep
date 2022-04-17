let powerSet = (input) => {
  const ps = [];
  function pset(input, output, ps) {
    if(input.length === 0){
      ps.push([output]);
      return;
    }
    pset(input.slice(1), output + input.slice(0,1), ps);
    pset(input.slice(1), output, ps);
  }
  pset(input, "", ps);
  return ps;
}


console.log(powerSet("3421"));