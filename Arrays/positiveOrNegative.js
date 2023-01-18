// If the current element is a negative number you must add it to the front of the array (as the first element of the array). 
// Otherwise, if the current element is a positive number (or 0), you must add it to the end of the array (as the last element of the array).

function solve(arr) {
    let newArr = [];
    for (const element of arr) {
        if(element < 0){
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
    }
    for (const number of newArr) {
        console.log(number);
    }
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);