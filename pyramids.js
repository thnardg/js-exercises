//process.stdout.write(""): print content without breaking to the next line.

/* 
HALF PYRAMID -> Use loops to print a half pyramid to the console like:
    #
   ##
  ### 
 ####
#####
*/

function makeHalfPyramid(num) { 
    // Limit the height so the max possible height is 9 and the min is 2.
    if (num > 1 && num < 10) {
        let height = num;
        // First loop is to add a new row corresponding to the height of the pyramid.
        for (let row = 0; row < height; row++) {
            // For each column, print a write space:
            for (let i = row + 1; i < height; i++) {
                process.stdout.write(" ");
            }
            // For each column, print a block:
            for (let j = height - row - 1; j < height; j++) {
                process.stdout.write("#");
            }
            // Break to the next line:
            console.log("");
        }
    } else {
        console.log("Not valid. The parameter should be an interger between 2 and 9");
    }
}
makeHalfPyramid(8);

console.log("\n_________________\n");

/* 
PYRAMID -> Use loops to print a pyramid to the console like:
    # #
   ## ##
  ### ###
 #### ####
##### #####
*/

function makePyramid(num) {
    // Limit the height so the max possible height is 9 and the min is 2.
    if (num > 1 && num < 10) {
        let height = num;
        // LEFT SIDE:
        for (let row = 0; row < height; row++) {
            // For each column, print a write space:
            for (let i = row + 1; i < height; i++) {
                process.stdout.write(" ");
            }
            // For each column, print a hash (#):
            for (let j = height - row - 1; j < height; j++) {
                process.stdout.write("#");
            }
            // Make a space between each side:
            process.stdout.write(" ");

            // RIGHT SIDE:
            // For each column, print a hash (#):
            for (let n = height - row - 1; n < height; n++) {
                process.stdout.write("#");
            }
            // Break to the next line:
            console.log("");
        }
    } else {
        console.log("Not valid. The parameter should be an interger between 2 and 9");
    }
}
makePyramid(8);