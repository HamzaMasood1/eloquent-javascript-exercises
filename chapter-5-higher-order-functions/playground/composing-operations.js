require("./script-data-set/scripts")
//finds the average year of origin for living and dead scripts in the data set.
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
console.log("Average year of living scripts: " + Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
//STEP 1: with FILTER FUNCTION: filter out all of the living scripts in new array.
//STEP 2: with MAP FUNCTION: get the year from the filtered array and input in new array.
//STEP 3: with AVERAGE FUNCTION: get the average of the mapped array as a number. 
//STEP 4: with MATH.round FUNCTION: Round the number down.


console.log("Average year of dead scripts: " + Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))))


//SUMMARY: we start with all scripts, filter out the living (or dead) ones, take the years from those, average them, and round the result.