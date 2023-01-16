// We're given a list with a number and 5 operations to perform on it.
// 	chop - divide the number by two
// 	dice - square root of a number
// 	spice - add 1 to the number
// 	bake - multiply number by 3
// 	fillet - subtract 20% from the number

function solve(...params) {

    let number = Number(params[0]);

    for (i = 1; i < params.length; i++) {

        let command = params[i];
        switch(command) {
            case 'chop':
                number /=2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= (number * 0.2);
                break;
        }
        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');