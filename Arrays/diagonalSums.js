function solve(matrix) {
    // Find the sums of the two main diagonals in a matrix.

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {

        mainDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - i - 1];
    }

    console.log(mainDiagonal, secondaryDiagonal);
    
}

solve([
    [20, 40],
    [10, 60]
    ]);
solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);