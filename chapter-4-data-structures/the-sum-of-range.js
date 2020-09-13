function range(start, end) {
    rangeArray = [];
    for (let i = start; i < end + 1; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}

function sum(numbers) {
    let answer = 0;
    for (let i of numbers) {
        answer += i;
    }
    return answer;
}

//console.log(range(2, 8))
console.log(sum(range(1, 10)))