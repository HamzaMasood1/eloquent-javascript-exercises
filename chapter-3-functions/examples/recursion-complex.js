function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            //return a number which is not null, if they are both not null then it returns the first number. 
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(13));

//if current number = target number then show history
//if current number > target number then return null
//if current number < target number then try both paths