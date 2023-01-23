function solve(dataAsJson) {

    const result = [];
    result.push('<table>');
    
    const data = JSON.parse(dataAsJson);
    const properties = Object.keys(data[0]);
    result.push(`  <tr>${properties.map(p => `<th>${p}</th>`).join('')}</tr>`);

    for(let entry of data){
        result.push(`  <tr>${properties.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`);
    }

    result.push('</table>');

    return result.join('\n');
}

console.log(solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
));