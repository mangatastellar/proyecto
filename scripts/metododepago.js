

document.addEventListener("DOMContentLoaded", () => {

    const btnAbrirModal = document.getElementById('btnAbrirModal');
    const modal = document.getElementById('miModal');
    const btnCerrarModal = document.getElementById('btnCerrarModal');
    
    const vistas = document.querySelectorAll('.modal-vista');
    const opciones = document.querySelectorAll('.opcion-modal');
    const botonesVolver = document.querySelectorAll('.btn-volver');


    function cambiarVista(idVista) {
        vistas.forEach(vista => vista.classList.remove('active'));
        const vistaObjetivo = document.getElementById(idVista);
        if (vistaObjetivo) {
            vistaObjetivo.classList.add('active');
        }
    }

    if (btnAbrirModal) {
        btnAbrirModal.addEventListener('click', () => {
            cambiarVista('vistaPrincipal');
            modal.style.display = 'flex';
        });
    }

    if (btnCerrarModal) {
        btnCerrarModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    opciones.forEach(opcion => {
        opcion.addEventListener('click', () => {
            const target = opcion.getAttribute('data-target');
            cambiarVista(target);
        });
    });

    botonesVolver.forEach(btn => {
        btn.addEventListener('click', () => {
            cambiarVista('vistaPrincipal');
        });
    });

    const inputNumero = document.getElementById('numeroTarjeta');
    const inputNombre = document.getElementById('nombreTarjeta');
    const inputExp = document.getElementById('expTarjeta');

    const previewNumero = document.getElementById('previewNumero');
    const previewNombre = document.getElementById('previewNombre');
    const previewExp = document.getElementById('previewExp');

    if (inputNumero) {
        inputNumero.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\D/g, '');
            valor = valor.replace(/(.{4})/g, '$1 ').trim();
            e.target.value = valor;

            if (previewNumero) {
                previewNumero.textContent = valor || '•••• •••• •••• ••••';
            }
        });
    }

    if (inputNombre) {
        inputNombre.addEventListener('input', (e) => {
            if (previewNombre) {
                previewNombre.textContent = e.target.value.toUpperCase() || 'NOMBRE Y APELLIDO';
            }
        });
    }

    if (inputExp) {
        inputExp.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\D/g, '');
            if (valor.length >= 2) {
                valor = valor.substring(0, 2) + '/' + valor.substring(2, 4);
            }
            e.target.value = valor;

            if (previewExp) {
                previewExp.textContent = valor || 'MM/AA';
            }
        });
    }
});