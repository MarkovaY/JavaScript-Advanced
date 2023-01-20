// You will receive a city’s name, population, and treasury as arguments, 
// which you will need to set as properties of an object and return it.

function city(name, population, treasury) {
    const city = {
        name: name,
        population: population,
        treasury: treasury
    };

    return city;
}

console.log(city('Tortuga', 7000, 15000));
console.log(city('Santo Domingo', 12000, 23500));