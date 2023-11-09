function myFunction() {
    let x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function mostrarFrase() {
    let frase = "¡Felicidades! Has reservado tu viaje galáctico. ¡Prepárate para la aventura!";
    // Redireccionar a la página ./answer.html con la frase como parámetro
    window.location.href = "./answer.html?frase=" + encodeURIComponent(frase);
}

function obtenerParametro(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

// Mostrar la frase en el párrafo
document.getElementById("fraseDiv").innerText = obtenerParametro("frase");