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
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

//printing
//console.log(reverseArray(['a', 'b', 'c']));
console.log(reverseArrayInPlace([1, 2, 3]));

