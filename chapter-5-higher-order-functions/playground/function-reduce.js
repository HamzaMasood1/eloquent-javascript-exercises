require("./script-data-set/scripts")
function reduce(array, combine, start) {
    for (let element of array) {
        start = combine(start, element);
    }
    return start;
}

//console.log(reduce(["1", "2", "3"], (a, b) => a + b, ""));

//using the reduce array to find the script with the highest character count

//script parameter is a single element within the SCRIPT array.
function characterCount(script) {
    //REDUCE() IS A STANDARD ARRAY FUNCTION, YOU DO NOT NEED TO ENTER THE START VALUE AS THE PARAMETER.
    //return script.ranges.reduce((count, [from, to]) => count + (to - from), 0);
    let funct = function (count, [from, to]) {
        return count + (to - from)
    }
    //count is the start value of 0. You do not have to define count inside the function, it is already defined in the parameter underneath. This time you have to define count as 0 so it is not defined as a 2d array.
    return script.ranges.reduce(funct, 0)
}
//console.log(characterCount(SCRIPTS[1]))
let longestScript = SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
})

console.log("the longest script is " + longestScript.name + " with " + characterCount(longestScript) + " characters")

