// We need to get two numbers from the user and return their sum

function calc() {
    const firstNum = document.getElementById('num1').value;
    const secondNum = document.getElementById('num2').value;

    const result = Number(firstNum) + Number(secondNum);

    document.getElementById('sum').value = result;
}
