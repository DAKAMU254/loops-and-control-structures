// Create a JS Code to check whether a year is a leap year.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// Example usage:
isLeapYear(1980); // 2020 is a leap year.
isLeapYear(1900); // 1900 is not a leap year.
isLeapYear(2000); // 2000 is a leap year.
