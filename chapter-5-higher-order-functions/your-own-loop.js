function loop(start, test, update, body) {
    // while (test(value)) {
    //     body(value);
    //     value = update(value)
    // }
    // return value

    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
