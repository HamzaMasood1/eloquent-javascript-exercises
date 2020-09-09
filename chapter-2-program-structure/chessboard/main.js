// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


let size = 20;
let signs = '';
col1 = '';
col2 = '';

for (c1 = 0; c1 < size; c1++) {
    col1 += ' #';
}
for (c2 = 0; c2 < size; c2++) {
    col2 += '# ';
}
for (let l = 0; l < size / 2; l++) {
    console.log(col1);
    console.log(col2);
}





