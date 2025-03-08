const resultButton = document.querySelector("#result");
const pressButton = document.querySelector("#button");

pressButton.addEventListener("click", () => {
    resultButton.textContent = "Hello World!"
});