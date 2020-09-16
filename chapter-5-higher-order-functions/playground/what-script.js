//One use of the data set would be figuring out what script a piece of text is using. Let’s go through a program that does this.

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}