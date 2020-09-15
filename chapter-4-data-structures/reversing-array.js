//reverse array
function reverseArray(array) {
    newArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}


//reverse array in place
function reverseArrayInPlace(array) {
    swap = 0;
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        old = array[i]
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
        console.log("i=" + i)
    }
    return array;
}

//printing
//console.log(reverseArray(['a', 'b', 'c']));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]));

