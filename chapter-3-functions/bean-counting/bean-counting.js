function countB(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "b") {
            count++;
        }
    }
    return count;
}

console.log(countB("abacus up your bebsib"))