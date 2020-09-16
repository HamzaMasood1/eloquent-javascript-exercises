function every(array, test) {
    // for (a of array) {
    //     if (!test(a)) {
    //         return false
    //     }
    // }
    // return true;

    //SECOND VERSION
    return array.some(test)
}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true