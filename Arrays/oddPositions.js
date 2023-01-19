// Find all the elements at odd positions, then multiply each by two, then reverse them, return them separated by space.

function solve(arr) {

    //                  filtering by position,      doubling,      reversing,  joining
    const result = arr.filter((x, i) => i % 2 == 1)
                .map(x => x * 2)
                .reverse()
                .join(' ');

    return result;
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);