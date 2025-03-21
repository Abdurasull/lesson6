let num1, num2, correctAnswer;

        function generateProblem() {
            num1 = Math.floor(Math.random() * 50) + 1; // 1 dan 50 gacha son
            num2 = Math.floor(Math.random() * 50) + 1;
            correctAnswer = num1 + num2;

            document.getElementById("problem").innerText = num1 + " + " + num2 + " = ?";
            document.getElementById("result").innerText = "";
            document.getElementById("answerInput").value = "";
        }

        function checkAnswer() {
            let userAnswer = parseInt(document.getElementById("answerInput").value);
            let resultText = (userAnswer === correctAnswer) ? "✅ To‘g‘ri!" : "❌ Noto‘g‘ri, to‘g‘ri javob: " + correctAnswer;
            document.getElementById("result").innerText = resultText;
        }