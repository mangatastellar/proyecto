document.addEventListener("DOMContentLoaded", () => {
    const pista = document.getElementById('carruselPista');
    if (!pista) return;

    const slides = Array.from(pista.children);
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const contenedorIndicadores = document.getElementById('carruselIndicadores');
    const contenedorCarrusel = document.getElementById('carruselContenedor');

    let indiceActual = 0;
    let intervalo;

    // 1. Crear los círculos indicadores automáticamente
    slides.forEach((_, index) => {
        const indicador = document.createElement('button');
        if (index === 0) indicador.classList.add('activo');
        
        indicador.addEventListener('click', () => {
            irASlide(index);
            reiniciarIntervalo();
        });
        
        contenedorIndicadores.appendChild(indicador);
    });

    const indicadores = Array.from(contenedorIndicadores.children);

    // 2. Mover el carrusel
    function irASlide(index) {
        indiceActual = index;
        pista.style.transform = `translateX(-${index * 100}%)`;
        
        indicadores.forEach((ind, i) => {
            if (i === index) {
                ind.classList.add('activo');
            } else {
                ind.classList.remove('activo');
            }
        });
    }

    function siguienteSlide() {
        indiceActual = (indiceActual + 1) % slides.length;
        irASlide(indiceActual);
    }

    function anteriorSlide() {
        indiceActual = (indiceActual - 1 + slides.length) % slides.length;
        irASlide(indiceActual);
    }

    // Eventos de botones
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            siguienteSlide();
            reiniciarIntervalo();
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            anteriorSlide();
            reiniciarIntervalo();
        });
    }

    // 3. Automatización (Cambia cada 4 segundos)
    function iniciarIntervalo() {
        intervalo = setInterval(siguienteSlide, 4000);
    }

    function reiniciarIntervalo() {
        clearInterval(intervalo);
        iniciarIntervalo();
    }

    // Pausar con el mouse encima
    if (contenedorCarrusel) {
        contenedorCarrusel.addEventListener('mouseenter', () => clearInterval(intervalo));
        contenedorCarrusel.addEventListener('mouseleave', () => iniciarIntervalo());
    }

    iniciarIntervalo();
});