// You have been tasked to create a registry for different towns and their population.
// The input comes as array of strings. 
// Each element will contain data for a town and its population in the following format: "{townName} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one.


function townRegistry(arr) {

    let registry = {};

    for(let element of arr) {

        const [name, population] = element.split(' <-> ');

        if(name in registry == false){
            registry[name] = 0;
        }  

        registry[name] += Number(population);

    }
    
    // First way of printing
    console.log(Object
    .entries(registry)
    .map(([name, population]) => `${name} : ${population}`)
    .join('\n'));

    // Second way of printing
    // for(let name in registry){
    //     console.log(`${name} : ${registry[name]}`);
    // }
}

townRegistry(
['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
townRegistry(
['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);