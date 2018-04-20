const theBackground = document.getElementById("backgroundWrapper");
const theButton = document.getElementById("launchButton");
const theInput = document.getElementById("colorInput");

theButton.addEventListener("click", () => {
    theBackground.style.backgroundColor = theInput.value;
});