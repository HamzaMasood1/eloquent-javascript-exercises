//NORMAL FUNCTION 
function multiplier(factor) {
    return function (number) {
        return number * factor;
    }
}
const twice = multiplier(2);
console.log(twice(5));


// //ARROW FUNCTION 
// function multiplier(factor) {
//     return number => number * factor;
// }
// const twice = multiplier(2);
// console.log(twice(5));