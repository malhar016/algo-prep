function getPowerSet (ip){
    let ps = ip.reduce((subSets, current) => {
        let newSubSet = subSets.map(s => [...s, current]);
        return subSets.concat(newSubSet);
    }, [[]]);
    return ps;
}

console.log(getPowerSet([1,2,3]));