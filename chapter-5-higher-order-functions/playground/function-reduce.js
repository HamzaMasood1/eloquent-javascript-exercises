require("./script-data-set/scripts")
function reduce(array, combine, start) {
    for (let element of array) {
        start = combine(start, element);
    }
    return start;
}

console.log(reduce(["1", "2", "3"], (a, b) => a + b, ""));

//using the reduce array to find the script with the highest character count

//SINCE REDUCE() IS A STANDARD ARRAY FUNCTION THE PARAMETERS CHANGE.
function characterCount(script) {
    //return script.ranges.reduce((count, [from, to]) => count + (to - from), 0);
    let funct = function (count, [from, to]) {
        return count + (to - from)
    }
    return script.ranges.reduce(funct, 0)
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}))

