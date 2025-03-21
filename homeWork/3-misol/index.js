function addItem() {
            let input = document.getElementById("itemInput");
            let text = input.value.trim();

            if (text !== "") {
                let li = document.createElement("li");
                li.textContent = text;

                document.getElementById("itemList").appendChild(li);
                input.value = ""; // Inputni tozalash
            } else {
                alert("Iltimos, matn kiriting!");
            }
        }