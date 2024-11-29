function changeText() {
    document.getElementById('dynamicText').innerText = "Text has been changed!";
}

function hoverChange() {
    alert("You hovered over the text!");
}

// Öffnet die Lightbox mit dem angeklickten Bild
function openLightbox(imageElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    // Setze das Bild der Lightbox auf das angeklickte Bild
    lightboxImage.src = imageElement.src;

    // Zeige die Lightbox an
    lightbox.style.display = 'flex';
}

// Schließt die Lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');

    // Verstecke die Lightbox
    lightbox.style.display = 'none';
}

