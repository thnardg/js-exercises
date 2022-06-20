function makePyramid(num) { 
    if (num > 1 && num < 10) {
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
        console.log("Not valid");
    }
}
makePyramid(8);