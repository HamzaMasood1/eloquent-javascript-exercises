require("./script-data-set/scripts")
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce(["1", "2", "3"], (a, b) => a + b, ""));

//using the reduce array to find the script with the highest character count

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => count + (to - from), 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}))

