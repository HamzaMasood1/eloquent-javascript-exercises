
function isEven(n) {
    if (isNormalInteger(n.toString())) {
        if (n - 2 == 0) {
            return "even"
        }
        else if (n - 2 == 1) {
            return "odd"
        }
        else {
            return isEven(n - 2);
        }
    }
    else {
        return ("enter postive whole integer")
    }

}

function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
