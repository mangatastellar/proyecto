document.addEventListener("DOMContentLoaded", () => {
    const btnCategorias = document.getElementById('btnCategorias');
    const megaMenu = document.getElementById('megaMenuCategorias');
    const cerrarMegaMenu = document.getElementById('cerrarMegaMenu');

    if (btnCategorias && megaMenu) {
        // Al hacer clic en Categorías del menú lateral, despliega o pliega el menú
        btnCategorias.addEventListener('click', (e) => {
            e.stopPropagation();
            megaMenu.classList.toggle('activo');
        });

        // Cerrar con la X
        if (cerrarMegaMenu) {
            cerrarMegaMenu.addEventListener('click', () => {
                megaMenu.classList.remove('activo');
            });
        }

        // Cierra el menú si hacés clic en cualquier otro lado de la página
        window.addEventListener('click', (e) => {
            if (!megaMenu.contains(e.target) && e.target !== btnCategorias) {
                megaMenu.classList.remove('activo');
            }
        });
    }
});