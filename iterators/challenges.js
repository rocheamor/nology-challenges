// You have an array of names all in lowercase you want a new array with all names but uppercase

const lowercaseNames = ["bella" , "hope" , "amor"];

const uppercaseNames = lowercaseNames.map((name) => name.toUpperCase());
console.log(uppercaseNames);

// You have an array of numbers, you want a new array with each number decremented by 5

const numbers = [2 , 4 , -9 , 23, 56 , 0];
const numbersMinusFive = numbers.map((number) => number - 5);
console.log(numbersMinusFive);