// Write a JS function that sorts the array in ascending order and returns a new array, containing only the second half of the input. 
// If there is an odd number of elements in the input, always take the bigger half.

function solve(arr) {

    arr.sort((a, b) => a - b);
    const start = Math.floor(arr.length / 2);
    let result = [];
    for (let i = start; i < arr.length; i++) {
        result.push(arr[i]);
    }

    console.log(result);
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);