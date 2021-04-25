function init(event) {
    // Finn noden som har klassen textbox og lagre referansen i en variabel
    let textBoxHandle = document.querySelector(".textbox");

    // Sett tekstinnholdet i noden lik en ny bit med tekst
    textBoxHandle.textContent = "Javascript lasta og klar!";
}

window.addEventListener('load', init);
