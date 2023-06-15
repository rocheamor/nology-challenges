const formPub = document.querySelector(".form");
const messageDiv = document.querySelector("#message");
const formDiv = document.querySelector("#form");
let beerImage = document.querySelector(".beer");

// 1. Create a function that takes 3 parameters (age, country, level of drunk) and returns a string or a boolean that says if someone can enter the pub or not (drunk above 3 is too much)

const pubConditionEntry = (age, country, levelOfDrunk) => {
    if(age >= 18 && country == "Australia" && levelOfDrunk <= 3) {
        return "Come in and have a beer!";
    } else {
        return "You can't have a beer.";
    }
}

const submitForm = (event) => {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const levelOfdrunk = document.getElementById("drunk").value;

    const pubConditionEntryResult = pubConditionEntry(age, country, levelOfdrunk);

    appendConditionToPage(pubConditionEntryResult);

    if(pubConditionEntryResult == "Come in and have a beer!") {

        messageDiv.classList.remove("message--failure");
        beerImage.src = "./assets/green_beer.svg";
        messageDiv.classList.add("message--success"); 
 
    } else {

        messageDiv.classList.remove("message--success");
        beerImage.src = "./assets/red_beer.svg";
        messageDiv.classList.add("message--failure");
    }
}

formPub.addEventListener("submit", (submitForm));

const appendConditionToPage = (pubConditionEntryResult) => {   
    const entryResult = document.createTextNode(pubConditionEntryResult);   
    messageDiv.innerHTML = '';
    messageDiv.appendChild(entryResult);
};


