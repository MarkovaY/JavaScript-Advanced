function radar(speed, area) {

    let limit = 0;
    switch (area){
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
                break;
        case 'interstate':
            limit = 90;
            break;
        case 'motorway':
            limit = 130;
            break;
    }

    let difference = limit - speed;
    if(difference >= 0){
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else {
        let status = '';
        if (Math.abs(difference) <= 20){
            status = 'speeding';
        } else if(Math.abs(difference) <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');