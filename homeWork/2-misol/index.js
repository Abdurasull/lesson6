function countVowels() {
            let text = document.getElementById("textInput").value.toLowerCase();
            let vowels = "aeiou";
            let count = 0;

            for (let char of text) {
                if (vowels.includes(char)) {
                    count++;
                }
            }

            document.getElementById("result").innerText = "Unli harflar soni: " + count;
        }