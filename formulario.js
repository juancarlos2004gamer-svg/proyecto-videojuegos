// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('miFormulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que la página se recargue

        // Obtén los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const comentario = document.getElementById('comentario').value;

        // Validación básica
        if (nombre === "" || correo === "" || comentario === "") {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Mostrar mensaje de éxito
        alert(`Gracias ${nombre}, tu comentario fue enviado correctamente.`);

        // Limpiar formulario
        form.reset();
    });
});
