// Write a function that receives three parameters – an array of pie flavors as strings, two target flavors as strings. 
// The result of the function should be a new array, containing a section of the original array, starting at the first flavor parameter, 
// and ending at (and including) the second flavor parameter.

function solve(piesArr, firstPie, secondPie) {

    const firstIndex = piesArr.indexOf(firstPie);
    const secondIndex = piesArr.indexOf(secondPie) + 1;

    const result = piesArr.slice(firstIndex, secondIndex);

    return result;
}

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);
solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);