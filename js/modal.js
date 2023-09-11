const abrirModalBtn = document.querySelectorAll('.abrirModal');
const cerrarModalBtn = document.getElementById('cerrarModal');
const miModal = document.getElementById('miModal');
const contenidoModal = document.querySelector('.modal-contenido');

abrirModalBtn.forEach((boton) => {
    boton.addEventListener('click', () => {
        const titulo = boton.getAttribute('titulo');
        const descripcion = boton.getAttribute('descripcion');
        const imagen = boton.getAttribute('data-imagen');
        contenidoModal.innerHTML = `
            <button class="cerrar-modal" id="cerrarModal">&times;</button>
            <h2>${titulo}</h2>
            <p>${descripcion}</p>
            <br>
            <button role="button" class="boton">
                    <i class="fas fa-play"></i>
                    Reproducir
                </button>
                <button role="button" class="boton">
                    <i class="fas fa-info"></i>
                    Mas información
                </button>`;
        miModal.style.backgroundImage = `url('${imagen}')`;
        miModal.style.display = 'block';
    });
});

cerrarModalBtn.addEventListener('click', () => {
    miModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === miModal) {
        miModal.style.display = 'none';
    }
});