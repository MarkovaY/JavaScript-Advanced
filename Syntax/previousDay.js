// We're given a date and we need to print back the previous date

function date(year, month, day) {
    const previousDate = new Date(year, month - 1, day - 1);

    const newYear = previousDate.getFullYear();
    const newMonth = previousDate.getMonth() + 1;
    const previousDay = previousDate.getDate();

    console.log(`${newYear}-${newMonth}-${previousDay}`);
}

date(2016, 9, 30);
date(2015, 5, 10);
date(2023, 1, 1);