let formBox = document.querySelector(".js-form");
let elInput = formBox.querySelector(".itemInput");
let elUl = formBox.querySelector(".itemList");

function addItem(elInput, elUl) {
            let text = elInput.value.trim();
            if (text !== "") {
                let li = document.createElement("li");
                li.textContent = text;

                elUl.appendChild(li);
                elInput.value = ""; // Inputni tozalash
            } else {
                alert("Iltimos, matn kiriting!");
            }
        }

formBox.addEventListener("submit", (evt) => {
    evt.preventDefault();
    addItem(elInput, elUl);


})
