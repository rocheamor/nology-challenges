/* # Loops challenges

## Challenge: Sum of n

MVP:
Create a function with a for loop that will add all the numbers up to n

You should create a variable to set the upper limit of your loop
Your loop should increment by 1 on each iteration
Your loop should print the final result

```
sum(10) => 55
``` */

function sum(number) {
    let sumOfNumber = 0;
    for (let i = 1; i <= number; i++)
    sumOfNumber += i;
    return sumOfNumber;
}

console.log(sum(10));

/* ## Challenge: Write a shopping list

MVP:
Create a function with a for loop that will add numbers to your shopping list

Store the following array in a variable
Your loop should iterate through every value in the array
Your loop should print a shopping list with the number and the name of the item

```
['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
=>
// In Console

1. milk
2. watermelon
3. eggs
4. soap
5. butter
6. apples
7. ice-cream
``` */

const shoppingList = ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];

function addNumbersToShoppingList() {
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(`${i+1}. ${shoppingList[i]}`);
    }
}
addNumbersToShoppingList();


/* ## Challenge: Capitalizing Odd Positioned Letters

MVP
Create a variable with a string of your choice
Loop through the letters in this string and build a new string
If the current index is odd, capitalize the letter before adding it to the new string

Bonus
If the current index is even increment the letter
E.g: a becomes b, d becomes e, t becomes u
Final: z becomes a */

const myString = "zebra";
let newString = "";
for (let i = 0 ; i < myString.length ; i++) {
    if (i % 2 === 1) {
        newString += myString[i].toUpperCase();
    }
    else {
        const currentChar = myString[i];
        if (currentChar === "z") {
            newString += "a";
        }
        else {
            newString += String.fromCharCode(currentChar.charCodeAt(0) + 1);
        }
    }
}
console.log(newString);

// const wordStr = "computer"
// let newStr = ""

// for (let i = 0; i < wordStr.length; i++) {
//   if (!(i % 2)) {
//     newStr += wordStr[i].toUpperCase()
//   } else {
//     newStr += String.fromCharCode(wordStr[i].charCodeAt(0)+1)
//   }
// }

// console.log(newStr)

/* # Challenge: Removing Vowels

MVP
Create a variable with a string of your choice
Loop through the letters in this and build a new string
The new strings should be the same as the input with the vowels missing

```
E.g: calum => clm, rachel => rchl, martyna => mrtyn
``` 

Bonus
Keep vowels in the new strings if they are succeeded by the letters l, m, or r

```
E.g: calum => calum, rachel => rchel, martyna => martyn
``` */

const nameWithVowels = "martyna";
const nameWithoutVowels = nameWithVowels.replace(/[aeiou]/gi, "");

console.log(nameWithoutVowels); 

let nameWithVowelCondition = "";

for (let i = 0; i < nameWithVowels.length; i++) {
  const currentChar = nameWithVowels[i];
  const nextChar = nameWithVowels[i + 1];

    if(/[aeiou]/i.test(currentChar)) {
        if (nextChar && /[lmr]/i.test(nextChar)) {
        nameWithVowelCondition += currentChar;
        }
    } else {
        nameWithVowelCondition += currentChar;
  }
}
console.log(nameWithVowelCondition);

//KAI's Solution
// const stringName = "martyna";
// let stringNameNoVowels = "";
// const vowels = ["a", "e", "i", "o", "u"];

// for (let i = 0; i < stringName.length; i++) {
//     let char = stringName[i];
//     if (!vowels.includes(char)) {
//         stringNameNoVowels += char;
//     }
// }

// console.log(stringNameNoVowels, "- this is for part 1");

//KAI's SOLUTION
// const stringName = "martyna";
// let stringNameNoVowels = "";
// const vowels = ["a", "e", "i", "o", "u"];
// const specialLetters = ["l", "m", "r"];

// for (let i = 0; i < stringName.length; i++) {
//     let char = stringName[i];
//     let nextChar = stringName[i + 1];
//     // add the character if: a) not a vowel, or b) the next character is a vowel but is succeeded by a special character
//     if (
//         !vowels.includes(char) ||
//         (nextChar && specialLetters.includes(nextChar))
//     ) {
//         stringNameNoVowels += stringName[i];
//     }
// }

// console.log(stringNameNoVowels, "- this is the bonus part");

/* ## Loop through an array backwards
Console.log() every element from the array */

const myDogs = ["Spotty" , "Youme" , "Asher" , "Whitey" , "Mocha"];

for(let i = myDogs.length - 1 ; i >= 0 ; i--) {
    console.log(myDogs[i]);
}