function init() {
    const alertButton = document.getElementById('entrybutton');
    const userInput = document.getElementById('entryinput');
    const resultHeading = document.getElementById('textoutput');

    alertButton.addEventListener('click', function () {
        const message = userInput.value.trim();
        alert("Peter Kim: " + message);
        resultHeading.textContent = message;
    });
}

window.addEventListener('DOMContentLoaded', init);
