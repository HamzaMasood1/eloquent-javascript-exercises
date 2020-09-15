function deepEqual(x, y) {
    let keysx = Object.keys(x);
    let keysy = Object.keys(y);

    if (typeof (x) != "object" || typeof (y) != "object" || x == null || y == null) {
        return false;
    }
    if (x === y) {
        return true
    }
    if (keysx.length != keysy.length) return false;

    for (let key of keysx) {
        if (!keysy.includes(key) || !deepEqual(x[key], y[key])) return false;
    }
    return true



}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true