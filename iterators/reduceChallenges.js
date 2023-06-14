// given an array of character codes, convert the codes to letters and reduce it to a single string

const arrOfCodes = [114, 101, 100, 117, 99, 101];

const convertedCodes = arrOfCodes.reduce((acc , curr) => {
    let convertedNumber = String.fromCharCode(curr);
    return acc + convertedNumber;
}, "");

console.log(convertedCodes);

// given an array of letters, reduce them to get the sum of character codes
const lettArr = ["c", "h", "e", "e", "s", "e"];

const sumOfCodes = lettArr.reduce((acc , curr) => {
    // let arrayToString = lettArr.join('');
    // let convertedLetter = arrayToString.charCodeAt(curr);
    return acc + curr.charCodeAt();
}, 0);

console.log(sumOfCodes);

// use reduce to filter an array to only get numbers greater than 10

const numsArr = [1, 345, 545, 2, 5, 7, 907];

const greaterThanTenArray = numsArr.reduce((acc , curr) => {
    if (curr > 10) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(greaterThanTenArray);
// use reduce to create an array of numbers (use numsArr) to the power of 2

const squaredArray = numsArr.reduce((acc , curr) => {
    const squaredNum = curr ** 2;
    acc.push(squaredNum);
    return acc;
}, []);

console.log(squaredArray);