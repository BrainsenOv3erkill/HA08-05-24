document.addEventListener('DOMContentLoaded', function() {
    // Finde den Button im HTML-Dokument
    const colorButton = document.getElementById('colorButton');

    // Füge einen Event Listener hinzu, um auf Klicks zu reagieren
    colorButton.addEventListener('click', function() {
        // Generiere eine zufällige Farbe
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        // Setze die Hintergrundfarbe des Buttons auf die zufällige Farbe
        colorButton.style.backgroundColor = randomColor;
    });
});