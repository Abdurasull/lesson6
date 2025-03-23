let formBox = document.querySelector(".js-form");
let elP1 = formBox.querySelector(".problem");

let formBox2 = document.querySelector(".js-form2");
let elInput = formBox2.querySelector(".answerInput1")
let elP2 = formBox2.querySelector(".result");


function generateProblem(elP1) {
    let num1, num2, correctAnswer;
    num1 = Math.floor(Math.random() * 50) + 1; // 1 dan 50 gacha son
    num2 = Math.floor(Math.random() * 50) + 1;
    correctAnswer = num1 + num2;
    elP1.textContent = num1 + " + " + num2 + " = ?";
    return correctAnswer;
}

function checkAnswer(correctAnswer, params1, params2) {
    userAnswer = Number(params1);
    
    let resultText = (userAnswer === correctAnswer) ? "✅ To‘g‘ri!" : "❌ Noto‘g‘ri, to‘g‘ri javob: " + correctAnswer;
    params2.textContent = resultText;
}

formBox.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    let result = generateProblem(elP1);
    formBox2.addEventListener("submit", (evt) => {
        evt.preventDefault();
        checkAnswer(result, elInput.value, elP2)
    })
    
})


        