function abrirPopup() {
    document.getElementById("popup").style.display = "flex";
    activarZoom();
}


function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
    resetZoom();
}

let zoomedIn = false;
let offsetX = 0;
let offsetY = 0;

function activarZoom() {
    const imagen = document.querySelector(".popup img");
    imagen.addEventListener("click", toggleZoom);
    imagen.addEventListener("mousemove", moverImagen);
}

function toggleZoom() {
    const imagen = document.querySelector(".popup img");
    zoomedIn = !zoomedIn;
    if (zoomedIn) {
        imagen.style.transform = "scale(2)";
        imagen.style.transition = "transform 0.3s ease"; // Agregamos una transición para suavizar el zoom
    } else {
        resetZoom();
    }
}

function resetZoom() {
    const imagen = document.querySelector(".popup img");
    zoomedIn = false;
    imagen.style.transform = "scale(1)";
    imagen.style.transition = "transform 0.3s ease"; // Agregamos la transición al restablecer el zoom
}

function moverImagen(event) {
    const imagen = document.querySelector(".popup img");
    if (zoomedIn) {
        const { offsetX, offsetY } = event;
        const { clientWidth, clientHeight } = imagen;
        const xPercent = (offsetX / clientWidth) * 100;
        const yPercent = (offsetY / clientHeight) * 100;
        imagen.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    }
}