// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase 'juego-miniatura'
    const miniaturas = document.querySelectorAll('.juego-miniatura');
    // Selecciona los elementos donde se mostrará la información
    const detalleJuego = document.getElementById('detalle-juego');
    const tituloJuego = document.getElementById('titulo-juego');
    const imagenJuego = document.getElementById('imagen-juego');
    const descripcionJuego = document.getElementById('descripcion-juego');

    // Itera sobre cada miniatura para agregar un evento de clic
    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', function() {
            // Obtiene los datos del juego de los atributos "data-"
            const titulo = this.dataset.titulo;
            const descripcion = this.dataset.descripcion;
            const imagenUrl = this.dataset.imagen;

            // Actualiza el contenido de los elementos HTML con la información del juego
            tituloJuego.textContent = titulo;
            descripcionJuego.textContent = descripcion;
            imagenJuego.src = imagenUrl; // Asigna la URL de la imagen grande

            // Muestra el contenedor de detalles del juego (que estaba oculto)
            detalleJuego.style.display = 'block';
        });
    });
});
