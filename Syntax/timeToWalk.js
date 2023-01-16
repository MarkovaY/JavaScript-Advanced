function walkingTime(steps, footprint, speed) {
    let distanceInMeters = steps * footprint;
    let speedMetersPerSecond = speed / 3.6;
    let rest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedMetersPerSecond + rest;

    let hours = Math.floor(time / 3600);
    if (hours < 1){
        hours == 00;
    }
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
}

walkingTime(4000, 0.60, 5);
walkingTime(2564, 0.70, 5.5);