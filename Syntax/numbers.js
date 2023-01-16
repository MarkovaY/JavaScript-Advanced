// We're given a number, we have to see whether each digit in the number is the same as the rest, then calculate the sum of all the digits.

function solve(number) {
    // Solution 1
    // let numToString = number.toString();
    // let sum = 0;
    // let isSame = true;
    // let firstSymbol = numToString[0];

    // for (let i = 0; i < numToString.length; i++) {
        
    //     if(firstSymbol !== numToString[i]){
    //         isSame = false;
    //     }
    //     sum += Number(numToString[i]);
    // }


    // Solution 2
    let arr = String(number).split('').map(n => Number(n));
    let isSame = arr.filter(n => n !== arr[0]).length ? false : true;
    let sum = arr.reduce((acc, num) => acc + num);

    console.log(isSame);
    console.log(sum);
}

solve(2222222);
solve(1234);