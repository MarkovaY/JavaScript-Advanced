const operators = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b,
    '**': (a,b) => a ** b,
    '%': (a,b) => a % b
}

function solve(a, b, operator){
    console.log(operators[operator](a,b));
}

solve(5, 6, '+');
solve(3, 5.5, '*');