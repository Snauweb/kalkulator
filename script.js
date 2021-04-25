let displayValue = 0; // Intern displayverdi
let operator1 = NaN; // Mellomlagring for binære operasjoner

function handleClick(event) {
    // Hva er teksten til knappen som nettopp ble trykket?
    let buttonText = event.originalTarget.textContent; 
    
    if(buttonText === "Enter") { // Bruk knappetekst til å velge hva som skjer
	displayValue = displayValue + 1; // Bare et eksempel, Enter skal gjøre noe annet
    }
    
    /// Bruk denne funksjonen for å oppdatere displayet
    
    updateDisplay(displayValue);
}

function updateDisplay(newValue) {
    let displayHandle = document.querySelector(".display");
    displayHandle.textContent = newValue;
}

function init(event) {
    // Finn noden som har klassen textbox og lagre referansen i en variabel
    let textBoxHandle = document.querySelector(".textbox");
    let reassuringMessage = "Javascript lasta og klar!";

    // Sett tekstinnholdet i noden lik en ny bit med tekst
    textBoxHandle.textContent = reassuringMessage;

    // Registrer lytterfunksjonen handleClick. Det kan hende det er lurt
    // å flytte dette over i en funksjon

    // querySelect velger den første noden som matcher.
    // querySelectAll velger alle noder som matcher
    let enterKeyHandle = document.querySelector(".enter");
    enterKeyHandle.addEventListener('click', handleClick);
}

// Kjør funksjonen init når nettsiden er ferdig lasta inn
window.addEventListener('load', init);

