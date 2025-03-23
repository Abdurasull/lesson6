let formBox = document.querySelector(".js-form");
let colorbox = formBox.querySelector(".colorBox");

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function changeColor(colorBox1) {
    colorBox1.style.backgroundColor = getRandomColor();
}

formBox.addEventListener("submit", (evt) => {
    evt.preventDefault();
    changeColor(colorbox);
})

