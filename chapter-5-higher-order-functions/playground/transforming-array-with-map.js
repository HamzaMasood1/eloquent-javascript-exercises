require("./filtering-arrays")
require("./script-data-set/scripts")
//applies a function to each element within the array and creates a new array.
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));

    }
    return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name))

