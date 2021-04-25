let displayValue = 1;

function handleClick(event) {
    displayValue = displayValue + 1;
    updateDisplay(displayValue);
}

function updateDisplay(newValue) {
    let displayHandle = document.querySelector(".display");
    displayHandle.textContent = newValue;
}

function init(event) {
    // Finn noden som har klassen textbox og lagre referansen i en variabel
    let textBoxHandle = document.querySelector(".textbox");

    // Sett tekstinnholdet i noden lik en ny bit med tekst
    textBoxHandle.textContent = "Javascript lasta og klar!";
    
    updateDisplay(displayValue);
    let enterKeyHandle = document.querySelector(".enter");
    enterKeyHandle.addEventListener('click', handleClick);
}

window.addEventListener('load', init);
