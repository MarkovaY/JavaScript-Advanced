function date(year, month, day) {
    const currentDate = new Date(year, month - 1, day - 1);

    const newYear = currentDate.getFullYear();
    const newMonth = currentDate.getMonth() + 1;
    const newDay = currentDate.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);
}

date(2016, 9, 30);
date(2015, 5, 10);
date(2023, 1, 1);