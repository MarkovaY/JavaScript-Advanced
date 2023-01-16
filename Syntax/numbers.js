// We're given a number, we have to see whether each digit in the number is the same as the rest, then calculate the sum of all the digits.

function solve(number) {
    let numToString = number.toString();
    let sum = 0;
    let isSame = true;
    let firstSymbol = numToString[0];

    for (let i = 0; i < numToString.length; i++) {
        
        if(firstSymbol !== numToString[i]){
            isSame = false;
        }
        sum += Number(numToString[i]);
    }
    console.log(isSame);
    console.log(sum);
}

solve(2222222);
solve(1234);