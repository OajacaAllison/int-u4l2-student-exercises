let submitButton = document.querySelector(".submit");
let resultse = document.querySelector(".results");

submitButton.addEventListener("click", function() {
    results.style.display = "block";
    let myName = document.querySelector(".my-name").value;
    let mood = document.querySelector(".mood").value;
    let food = document.querySelector(".food-name").value;
    let birthYear = document.querySelector(".year").value;
    let age = 2023 - birthYear; 
    let cityEl = document.querySelector (".city").value; // update to 2024, if necessary
    // 1. Declare a variable to save the value of the city the user is from.

    // 2. Below write your sentences! 
    // - Have them show up in the div with class "results".
    // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
    // - Try placing your sentences into <p> or <li> tags.
    let results = "my name is" + myName + "I feel" + mood + "I love eating" + food + "I was born on" + birthYear + "I am" + age + "o+ cityEl;
    resultse.innerHTML=result;

});