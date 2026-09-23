// Seleccionamos los elementos del DOM
const botonEntrega = document.getElementById('btnMetodoEntrega');
const modalEntrega = document.getElementById('modalEntrega');
const cerrarEntrega = document.querySelector('.cerrar-modal-entrega');

// 1. Cuando haces clic en el botón, se abre el modal (cambiando el display a flex)
botonEntrega.addEventListener('click', () => {
    modalEntrega.style.display = 'flex';
});

// 2. Cuando haces clic en la "X", se cierra el modal
cerrarEntrega.addEventListener('click', () => {
    modalEntrega.style.display = 'none';
});

// 3. Si el usuario hace clic en el fondo oscuro transparente, también se cierra
window.addEventListener('click', (evento) => {
    if (evento.target === modalEntrega) {
        modalEntrega.style.display = 'none';
    }
});