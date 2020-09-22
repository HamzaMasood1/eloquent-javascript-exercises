console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false


////////////////////SET OF CHARACTERS/////////////////
console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false


// \d	Any digit character
// \w	An alphanumeric character (“word character”)
// \s	Any whitespace character (space, tab, newline, and similar)
// \D	A character that is not a digit
// \W	A nonalphanumeric character
// \S	A nonwhitespace character
// .	Any character except for newline


let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true


////////////////////Repeating parts of a pattern/////////////////
//  + means element may be repeated one or more times
//  * means element may be repeated 0 times or more
//  ? means element has the option to occur
console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true

//to indicate that a pattern should occur a precise amount of times use {} 
// you can define a rang {2,4} min 2 and max 4 times the pattern should repeat
let dateTimeNew = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTimeNew.test("1-30-2003 8:45"));
// → true


////////////////////Grouping subexpressions/////////////////
// i makes the elements case insensitive therefore matching with the upper case B

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true


////////////////////Matches and groups/////////////////

let match = /\d+/.exec("one two 100 234234 6665 12312");
console.log(match);
// → ["100"]
console.log(match.index);
// -> 8 check if this value is correct

