//Write a program that receives a total of 4 parameters in the format x1, y1, x2, y2. 
//Check if the distance between each point (x, y) and the beginning of the Cartesian coordinate system (0, 0) is valid. 
//A distance between two points is considered valid if it is an integer value. 

function solve(x1, y1, x2, y2) {

    function isValid(x1, y1, x2, y2) {

        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        if(Number.isInteger(distance)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);