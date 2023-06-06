/*## Challenge: Tell me the day!

MVP:
Create a switch block that will log a string for each day of the week.

Create a variable called day
The switch will be given a number and return the matching days of the week
e.g. if day = 2, the switch should print Today is Tuesday in the console.
Your switch block should also handle numbers out of range */

let number = 23;
let day = number % 7;

switch (day){
    case 1: 
        console.log("Today is Monday.");
        break;
    case 2: 
        console.log("Today is Tuesday.");
        break;
    case 3: 
        console.log("Today is Wednesday.");
        break;
    case 4: 
        console.log("Today is Thursday.");
        break;
    case 5: 
        console.log("Today is Friday.");
        break;
    case 6: 
        console.log("Today is Saturday.");
        break;
    case 0: 
        console.log("Today is Sunday.");
        break;
}
/*## Challenge: Eye Colour

MVP:
Tell the user what eye colour their child would have.

Create two variables parent1 and parent2
Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
Use the following image as a reference */

let parent1 = "blue";
let parent2 = "green";
let eyeCombo = parent1 + parent2;
let childEyeColor;

switch (eyeCombo){
    case "brownbrown":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%`);
        childEyeColor = "brown";
        break;
    case "greenbrown":
    case "browngreen":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%`);
        childEyeColor = "brown";
        break;
    case "bluebrown":
    case "brownblue":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%`);
        childEyeColor = "blue";
        break;
    case "greengreen":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 25%, brown is <1% and green is 75%`);
        childEyeColor = "green";
        break;
    case "greenblue":
    case "bluegreen":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 0% and green is 50%`);
        childEyeColor = "blue";
        break;
    case "blueblue":
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 99%, brown is 0% and green is 1%`);
        childEyeColor = "blue";
        break;
    default:
        console.log("Eye color combination not recognised")
}

/* Bonus:
Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour */

switch(childEyeColor) {
    case "brown":
        console.log("My favourite eye color");
        break;
    case "blue":
        console.log("My mediocre eye color");
        break;
    case "green":
        console.log("My least favourite eye color");
        break;
}

let test = "test";
let testAgain = "testingAgain";