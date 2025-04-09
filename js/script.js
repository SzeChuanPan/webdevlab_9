function startEventHandler() {
    const alertButton = document.getElementById('entrybutton');
    const userInput = document.getElementById('entryinput');
    const displayOutput = document.getElementById('textoutput');

    alertButton.addEventListener('click', function () {
        const typedText = userInput.value.trim();
        alert("Peter Kim says: " + typedText);
        displayOutput.textContent = typedText;
    });
}

window.addEventListener('DOMContentLoaded', startEventHandler);
