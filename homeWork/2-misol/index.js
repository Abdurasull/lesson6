let formBox = document.querySelector(".js-form");
let elInput = formBox.querySelector(".textInput");
let elP = formBox.querySelector(".result");

function countVowels(elInputVel) {

    let vowels = "aeiou";
    let count = 0;
    
    for (let char of elInputVel) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return "Unli harflar soni: " + count;
}

formBox.addEventListener("submit", (evt) => {
    evt.preventDefault();
    elP.textContent = countVowels(elInput.value);


})

