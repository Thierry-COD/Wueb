// Cargar la barra de navegación
fetch("navBar.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error al cargar la barra de navegación: " + response.statusText);
        }
        return response.text();
    })
    .then((data) => {
        document.getElementById("navbar").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar la barra de navegación:", error));

// Cargar el pie de página
fetch("Footer.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error al cargar el pie de página: " + response.statusText);
        }
        return response.text();
    })
    .then((data) => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar el pie de página:", error));

 