// It returns time difference

function durationBetweenDates(startDate = "16 Jan 1995", endDate = "24 Feb 2022", dimension = "seconds") {
    let differenceInSeconds = Math.abs(Date.parse(endDate) - Date.parse(startDate))/1000;
    let result;

    switch (dimension) {
        case "days":
            result = Math.floor(differenceInSeconds/86400);
            break;
        case "hours":
            result = Math.floor(differenceInSeconds/3600);
            break;
        case "minutes":
            result = Math.floor(differenceInSeconds/60);
            break;
        default:
            result = differenceInSeconds;
    }
    return result;
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));  // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));  // поверне '362 days'
