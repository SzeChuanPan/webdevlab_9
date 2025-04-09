function init() {
    const alertButton = document.getElementById('entrybutton');
    const userInput = document.getElementById('entryinput');
    const resultHeading = document.getElementById('textoutput');

    // Add click event listener to the button
    alertButton.addEventListener('click', function () {
        const message = userInput.value;

        // Show alert with your name and input
        alert('Peter Kim: ' + message);

        // Update the headline text with the input
        resultHeading.textContent = message;
    });
}

window.addEventListener('load', init);
