/* 
PYRAMID 1 -> Use loops to print a half pyramid to the console like:
    #
   ##
  ### 
 ####
#####
*/

function makePyramid(num) { 
    // Limit the height so the max possible height is 9 and the min is 3.
    if (num > 2 && num < 10) {
        let height = num;
        for (let row = 0; row < height; row++) {
            for (let i = row + 1; i < height; i++) {
                process.stdout.write(" ");
            }
            for (let j = height - row - 1; j < height; j++) {
                process.stdout.write("#");
            }
            console.log("");
        }
    } else {
        console.log("Not valid. The parameter should be an interger between 3 and 9");
    }
}
makePyramid(8);