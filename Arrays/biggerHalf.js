// Write a JS function that sorts the array in ascending order and returns a new array, containing only the second half of the input. 
// If there is an odd number of elements in the input, always take the bigger half.

function solve(arr) {

    arr.sort((a, b) => a - b);

    const start = Math.floor(arr.length / 2);

    let result = arr.splice(start, arr.length);

    return result;
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));