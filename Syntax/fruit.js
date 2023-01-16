// We need to calculate the price for an amount of (given type of) fruits and print the results

function calculate(fruit, grams, price) {
    let kilos = grams / 1000;
    let totalPrice = kilos * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`)
}

calculate('orange', 2500, 1.80);
calculate('apple', 1563, 2.35);