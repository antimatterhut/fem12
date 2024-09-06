/* First, we need to declare some variables, then we need the code for the sticky buttons, then submit button----> transition code. We finally need 
the number to be displayed in the span*/

const numberButtons = document.querySelectorAll(".number-rating-button"); //EVERY NUMBER CHOICE BUTTON
const submitButton = document.querySelector(".button"); //SUBMIT BUTTON
const ratingPage = document.querySelector(".rating-page"); //ratings page
const thankYouPage = document.querySelector(".thank-you"); //thank-you page
const rating = document.querySelector(".rating");
let selection = 0; //Number that I chose

const handleNumberButtons= (e) => {
    numberButtons.forEach((element) => { //changes the color while keeping the rest of the buttons the same
        if(element == e.target){
            element.classList.add("white-button");
        }
        else{
            element.classList.remove("white-button");
        }

        selection = Number(e.target.innerHTML); //selects the number for the thank you page
    })
}

//adding the event listener to all of the buttons
numberButtons.forEach((element) => {
    element.addEventListener("click", handleNumberButtons);
})

//We need to now add the submit functionality

const handleSubmit = (e) => { //go to end screen
    if(selection != 0){
        rating.innerHTML = selection;
        ratingPage.classList.toggle("invisible");
        thankYouPage.classList.toggle("invisible");
    }
}

submitButton.addEventListener("click", handleSubmit);