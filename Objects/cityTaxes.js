// Expand the city record task, by adding additional field taxRate, then adding three methods collectTaxes, applyGrowth and applyRecession.

//@ts-check        
function collectTaxes() {
    this.treasury += this.population * this.taxRate;
};
function applyGrowth(percentage) {
    this.population += Math.floor(this.population * (percentage / 100));
};
function applyRecession(percentage) {
    this.treasury -= Math.ceil(this.treasury * (percentage / 100));
};
function cityTaxes(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession
    };

    return result;
}

const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);
